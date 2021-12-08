const Lighting = (props:{highlight:string}) => {
  const {highlight} = props;

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight intensity={.8} position={[5, 0, 10]} color={highlight} />
    </>
  )
}

export default Lighting;