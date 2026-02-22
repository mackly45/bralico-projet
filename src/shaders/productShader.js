export const productShader = {
    uniforms: {
        uTime: { value: 0 },
        uColor: { value: null },
        uMouse: { value: [0, 0] },
        uFresnelColor: { value: null },
        uBackground: { value: null }
    },
    vertexShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    
    void main() {
      vUv = uv;
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vViewPosition = normalize(cameraPosition - worldPosition.xyz);
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor;
    uniform vec3 uFresnelColor;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;

    void main() {
      float fresnel = pow(1.0 - dot(vNormal, vViewPosition), 3.0);
      vec3 finalColor = mix(uColor, uFresnelColor, fresnel);
      
      // Subtile liquid shimmer
      float shimmer = sin(vUv.y * 10.0 + uTime * 2.0) * 0.05;
      finalColor += shimmer;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};
