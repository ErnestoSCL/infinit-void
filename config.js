// ============================================================
//  SAT0RU CONFIG — Chỉnh tùy thích, reload page để thấy thay đổi
// ============================================================

const CONFIG = {

    // =================== PARTICLES ===================
    // Số hạt mỗi quả cầu (tổng = x2). Cao hơn = đẹp hơn nhưng lag hơn
    BALL_COUNT: 10000,

    // Kích thước base của mỗi hạt particle (Three.js PointsMaterial)
    PARTICLE_BASE_SIZE: 0.3,

    // =================== RED BALL (tay trái) ===================
    RED: {
        coreRatio: 0.12,
        coreRadius: 7,
        coreColor: { r: 5.0, g: 0.15, b: 0.1 },   // Brighter hot white-red core
        coreSize: 3.2,

        arms: 3,
        spiralSpeed: 15,
        spiralRadius: 30,
        spiralStartRadius: 2,
        spiralDepth: 8,
        armColor: { r: 1.4, g: 0.05, b: 0 },      // Vivid crimson arms
        armSize: 1.4,

        rotationSpeed: -0.025,

        bloom: 4.5,
        shake: 0.18,
    },

    // =================== BLUE BALL (tay phải) ===================
    BLUE: {
        coreRatio: 0.12,
        coreRadius: 7,
        coreColor: { r: 0.3, g: 0.8, b: 5.0 },   // Blazing blue-white core
        coreSize: 3.2,

        arms: 3,
        spiralSpeed: 15,
        spiralRadius: 30,
        spiralStartRadius: 2,
        spiralDepth: 8,
        armColor: { r: 0, g: 0.3, b: 1.5 },       // Deep electric blue arms
        armSize: 1.4,

        rotationSpeed: -0.025,

        bloom: 4.5,
        shake: 0.18,
    },

    // =================== PURPLE (dung hợp) ===================
    PURPLE: {
        coreRatio: 0.8,
        coreRadius: 14,
        coreColor: { r: 1.8, g: 0.6, b: 4.5 },   // Blazing violet-white core
        coreSize: 2.2,

        outerSpread: 60,
        outerColor: { r: 0.9, g: 0.3, b: 2.0 },   // Vivid deep purple outer
        outerSize: 1.2,

        rotationSpeedA: 0.04,
        rotationSpeedB: -0.03,
        rotationY: 0.008,

        fusionDistance: 220,

        bloom: 6.5,    // Maximum glow — purple is the ultimate technique
        shake: 1.2,
    },

    // =================== FUSION ANIMATION (quay vòng hút nhau) ===================
    FUSION: {
        orbitSpeed: 0.018,           // Slower orbit — longer dance
        orbitStartRadius: 30,        // Larger starting orbit radius

        spiralShrinkRate: 0.993,     // Very slow spiral — longer convergence
        spiralSpeedUp: 1.004,        // Gentler speed-up
        collisionRadius: 2,

        explosionDuration: 180,      // 3x longer explosion (was 70) — dramatic reform
        explosionScatter: 90,        // More scatter = more dramatic burst
        explosionBloom: 8.0,         // Max bloom on impact
        explosionShake: 2.0,
        reformSpeed: 0.04,

        orbitBloom: 4.5,             // Glow during orbit dance
        orbitShake: 0.25,
    },

    // =================== UNLIMITED VOID ===================
    VOID: {
        ringRadius: 22,             // Bán kính vòng accretion chính
        ringColor: { r: 1, g: 1, b: 1 },
        ringSize: 2.5,

        outerMinRadius: 25,
        outerMaxRadius: 95,
        outerColor: { r: 0.1, g: 0.6, b: 1.0 },
        outerSize: 0.7,

        rotationZ: 0.0018,           // Slowed Z rotation (was 0.004)
        rotationX: 0.0004,           // Slowed X rotation (was 0.001)

        bloom: 3,
        shake: 0,

        posX: 0,  // x âm = trái, x dương = phải
        posY: -5,   // y dương = trên, y âm = dưới
        posZ: 0,

        // Warp speed intro (du hành thời gian)
        warpDuration: 90,          // Longer warp intro (was 60)
        warpSpeed: 6,              // Slower warp streaks (was 10)
        warpBloom: 5.0,             // Bloom rực rỡ
        warpShake: 1.5,             // Rung mạnh hơn
    },

    // =================== BLOOM (post-processing) ===================
    BLOOM: {
        defaultStrength: 1.8,   // Mặc định khi khởi tạo
        radius: 0.4,
        threshold: 0.85,
    },

    // =================== GESTURE DETECTION ===================
    DETECTION: {
        crossedFingerThreshold: 0.045,  // Khoảng cách tip để coi là bắt chéo
        snapCooldownFrames: 30,         // Frame cooldown sau mỗi lần bắn (chỉ tay)
        chargeFrames: 20,               // Số frame giữ 3 ngón trước khi bắn (~1 giây)
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.6,
    },

    // =================== ANIMATION ===================
    ANIMATION: {
        positionLerpSpeed: 0.18,    // Smoother follow (was 0.5)
        morphLerpSpeed: 0.035,       // Slower morph (was 0.1)
        fadeInSpeed: 0.04,           // Slower fade in (was 0.08)
        fadeOutSpeed: 0.018,         // Slower fade out (was 0.04)
        shakeMultiplier: 10,         // Cường độ rung màn hình
        neutralRotation: 0.0018,     // Slower idle rotation (was 0.005)
    },

    // =================== PROJECTILE (búng tay) ===================
    PROJECTILE: {
        speed: 20,             // Tốc độ bay cơ bản
        duration: 100,          // Số frame bay (đủ lâu để bay qua camera)
        redDirection: { x: 1, y: 0.2, z: 1 },     // Bay thẳng về phía người xem
        blueDirection: { x: -1, y: 0.2, z: 1 },    // Bay thẳng về phía người xem
        purpleDirection: { x: 0, y: 0.2, z: 1 },  // Bay thẳng về phía người xem
    },

    // =================== CAMERA ===================
    CAMERA: {
        width: 1280,
        height: 720,
        cameraZ: 55,            // Khoảng cách camera 3D
        fov: 75,                // Field of view
    },



    // =================== DEBUG ===================
    DEBUG: {
        showLandmarks: true,    // Hiện skeleton tay lên màn hình (true/false)
    },
};

export default CONFIG;
