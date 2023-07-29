'use client'
import MathJax from "react-mathjax"

interface IMathJax {
  inline?: boolean
  formula: string
}

export const MathJaxFormula = ({  formula, inline } : IMathJax) => {
   
        
    
      return (
        <MathJax.Provider >
            <MathJax.Node  inline={inline} formula={ formula } />
        </MathJax.Provider>
      )
  }