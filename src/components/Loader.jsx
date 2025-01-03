import { Html, useProgress } from "@react-three/drei"
const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <span className="Canvas-load">

      </span>
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader