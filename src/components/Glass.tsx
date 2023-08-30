import {
  Box,
  Bvh,
  MeshRefractionMaterial,
  RoundedBox,
  Sphere,
  TorusKnot,
} from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import {
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  DataTextureLoader,
  TetrahedronGeometry,
} from 'three'
import { TextureLoader } from 'three'
export default () => {
  const texture = useLoader(TextureLoader, '/assets/images/heroTexture.png')

  return (
    // <Suspense>
    <Bvh>
      <TorusKnot>
        <MeshRefractionMaterial envMap={texture} />
      </TorusKnot>
    </Bvh>
    // </Suspense>
  )
}
