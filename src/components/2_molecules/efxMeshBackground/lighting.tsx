const Lighting = (props: { highlight: string }) => {
  const { highlight } = props;

  return (
    <>
      <ambientLight intensity={2} />
      <pointLight intensity={200} position={[5, 0, 10]} color={"#ffffff"} />
    </>
  )
}

export default Lighting;