const Lighting = (props:{highlight:string}) => {
  const {highlight} = props;

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight intensity={1} position={[5, 0, 10]} color={highlight} />
      {/* <pointLight intensity={6} position={[0, 0, -3]} color={highlight} /> */}
    </>
  )
}

export default Lighting;