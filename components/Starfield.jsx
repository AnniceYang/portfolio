import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // 画布尺寸初始化
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 星星层级配置，每层星星数量、最大半径、移动速度、基础透明度
    const starLayers = [
      { count: 50, maxRadius: 2.5, speed: 0.05, baseAlpha: 0.6 },
      { count: 30, maxRadius: 4.5, speed: 0.025, baseAlpha: 0.8 },
      { count: 20, maxRadius: 6, speed: 0.012, baseAlpha: 1 },
    ];

    // 初始化所有星星数组，按层级分布
    const stars = [];
    starLayers.forEach(({ count, maxRadius, speed, baseAlpha }) => {
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width, // 随机水平位置
          y: Math.random() * height, // 随机垂直位置
          radius: Math.random() * maxRadius + 0.5, // 星星大小，随机在0.5-maxRadius之间
          baseAlpha, // 基础透明度，用于控制闪烁范围
          alpha: baseAlpha * (0.7 + Math.random() * 0.8), // 当前透明度，初始随机
          alphaDelta:
            (Math.random() * 0.006 + 0.002) * (Math.random() < 0.5 ? 1 : -1), // 透明度变化速率和方向
          speed, // 星星下落速度（垂直）
          rotation: Math.random() * Math.PI * 2, // 星星当前旋转角度
          rotationSpeed:
            (Math.random() * 0.004 + 0.002) * (Math.random() < 0.5 ? 1 : -1), // 旋转速度（方向随机）
          scale: 1, // 缩放初始值
          scaleDelta:
            (Math.random() * 0.004 + 0.002) * (Math.random() < 0.5 ? 1 : -1), // 缩放变化速率
        });
      }
    });

    // 流星最大同时存在数量
    const maxMeteors = 5;
    // 流星数组
    const meteors = [];

    // 流星初始化函数
    function createMeteor() {
      return {
        x: Math.random() * width * 0.7, // 流星起始水平位置，限制在屏幕左70%区域，避免突然出现
        y: Math.random() * height * 0.6, // 流星起始垂直位置，上方60%
        length: 400 + Math.random() * 300, // 流星长度
        speed: 5 + Math.random() * 5, // 流星移动速度
        alpha: 1, // 流星透明度
        angle: Math.PI / 4, // 流星移动角度45度，斜向下
        tailParticles: [], // 流星尾巴粒子数组
        active: true, // 流星是否激活
      };
    }

    // 初始化流星数组，填满最大数量
    for (let i = 0; i < maxMeteors; i++) {
      meteors.push(createMeteor());
    }

    // 更新流星尾巴粒子函数
    function updateTail(meteor) {
      // 每帧在流星当前位置生成一个尾巴粒子
      meteor.tailParticles.push({
        x: meteor.x,
        y: meteor.y,
        radius: Math.random() * 3 + 1, // 尾巴粒子大小随机
        life: 50, // 生命周期
        alpha: meteor.alpha, // 初始透明度继承流星透明度
      });

      // 过滤掉生命结束的尾巴粒子
      meteor.tailParticles = meteor.tailParticles.filter((p) => p.life > 0);

      // 逐帧更新尾巴粒子状态（透明度和大小逐渐减小）
      meteor.tailParticles.forEach((p) => {
        p.life--;
        p.alpha *= 0.92; // 透明度递减
        p.radius *= 0.92; // 变小
      });
    }

    // 动画主循环
    const animate = () => {
      ctx.clearRect(0, 0, width, height); // 清除画布

      // 绘制所有星星
      stars.forEach((star) => {
        star.y += star.speed; // 星星向下移动
        if (star.y > height) star.y = 0; // 到底部回到顶部

        star.alpha += star.alphaDelta; // 透明度变化（闪烁效果）
        if (star.alpha > star.baseAlpha)
          star.alphaDelta = -Math.abs(star.alphaDelta);
        if (star.alpha < star.baseAlpha * 0.4)
          star.alphaDelta = Math.abs(star.alphaDelta);

        star.rotation += star.rotationSpeed; // 星星缓慢旋转
        star.scale += star.scaleDelta; // 星星缓慢缩放
        if (star.scale > 1.2 || star.scale < 0.8)
          star.scaleDelta = -star.scaleDelta; // 缩放范围限制

        // 创建径向渐变，使星星边缘柔和且有颜色渐变
        const gradient = ctx.createRadialGradient(
          0,
          0,
          0,
          0,
          0,
          star.radius * 8
        );
        gradient.addColorStop(
          0,
          `rgba(255, 255, 255, ${star.alpha.toFixed(2)})`
        );
        gradient.addColorStop(
          0.5,
          `rgba(255, 182, 193, ${star.alpha.toFixed(2)})`
        );
        gradient.addColorStop(1, `rgba(147, 112, 219, 0)`);

        ctx.save();
        ctx.translate(star.x, star.y);
        ctx.rotate(star.rotation);
        ctx.scale(star.scale, star.scale);

        ctx.beginPath();
        ctx.arc(0, 0, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.shadowColor = `rgba(255, 182, 193, ${star.alpha.toFixed(2)})`;
        ctx.shadowBlur = star.radius * 8;
        ctx.fill();

        ctx.restore();
      });

      // 绘制流星群
      meteors.forEach((meteor, idx) => {
        if (!meteor.active) {
          // 非激活流星有0.3%概率重新激活（制造随机流星出现频率）
          if (Math.random() < 0.003) {
            meteors[idx] = createMeteor();
          }
          return;
        }

        ctx.save();

        const endX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const endY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        // 创建线性渐变，尾部颜色从白色变成粉紫色然后透明
        const grad = ctx.createLinearGradient(meteor.x, meteor.y, endX, endY);
        grad.addColorStop(0, `rgba(255,255,255,${meteor.alpha.toFixed(2)})`);
        grad.addColorStop(
          0.5,
          `rgba(255,182,193,${(meteor.alpha * 0.7).toFixed(2)})`
        );
        grad.addColorStop(1, `rgba(147,112,219,0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.shadowColor = `rgba(255,182,193,${meteor.alpha.toFixed(2)})`;
        ctx.shadowBlur = 20;

        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // 更新流星尾巴粒子效果
        updateTail(meteor);
        meteor.tailParticles.forEach((p) => {
          // 尾巴粒子渐变
          const particleGradient = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.radius * 6
          );
          particleGradient.addColorStop(
            0,
            `rgba(255, 182, 193, ${p.alpha.toFixed(2)})`
          );
          particleGradient.addColorStop(1, "rgba(147, 112, 219, 0)");

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = particleGradient;
          ctx.shadowColor = `rgba(255, 182, 193, ${p.alpha.toFixed(2)})`;
          ctx.shadowBlur = p.radius * 6;
          ctx.fill();
        });

        ctx.restore();

        // 移动流星位置
        meteor.x += meteor.speed * Math.cos(meteor.angle);
        meteor.y += meteor.speed * Math.sin(meteor.angle);
        meteor.alpha -= 0.02; // 透明度逐渐降低，流星逐渐消失

        // 流星超出边界或透明度为0时，标记为非激活，等待重新生成
        if (
          meteor.alpha <= 0 ||
          meteor.x > width + meteor.length ||
          meteor.y > height + meteor.length
        ) {
          meteors[idx].active = false;
        }
      });

      // 持续动画循环
      requestAnimationFrame(animate);
    };

    animate();

    // 窗口尺寸变化时调整画布大小及星星随机位置
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      stars.forEach((star) => {
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 画布元素，固定铺满全屏，且不会阻塞鼠标事件
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
