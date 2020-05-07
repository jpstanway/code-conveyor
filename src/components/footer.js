import React from "react"
import styled from "styled-components"

const Copyright = styled.p`
  font-size: 0.6rem;
  text-align: center;
  text-transform: uppercase;
`

export default () => (
  <footer>
    <hr />
    <Copyright>
      © {new Date().getFullYear()} Code Conveyor. All rights reserved.
    </Copyright>
  </footer>
)
