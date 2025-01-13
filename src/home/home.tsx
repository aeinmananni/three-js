import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      {/* HTML Content */}
      <h1
        className="absolute top-4 left-4 bg-indigo-500 text-white p-4 rounded-lg"
        style={{ zIndex: 10 }}
      >
        Welcome to Three.js Project
      </h1>

      {/* Three.js Canvas */}
      <Canvas>
        {/* 3D Mesh */}
        <mesh position={[4, 0, 0]}>
          <boxGeometry /> {/* A simple cube */}
          <meshStandardMaterial color="orange" />
        </mesh>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
      </Canvas>
    </div>
  );
};

export default Home;
