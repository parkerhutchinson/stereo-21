const Lighting = (props: { highlight: string }) => {
  const { highlight } = props;

  return (
    <>
      <ambientLight intensity={.7} />
      <pointLight intensity={200} position={[5, 0, 10]} color={"#58507c"} />
    </>
  )
}

export default Lighting;