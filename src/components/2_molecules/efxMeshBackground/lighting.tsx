const Lighting = (props: { highlight: string }) => {
  const { highlight } = props;

  return (
    <>
      <ambientLight intensity={.8} />
      <pointLight intensity={200} position={[5, 0, 10]} color={highlight} />
    </>
  )
}

export default Lighting;