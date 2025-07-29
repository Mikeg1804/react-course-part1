import { ReactNode } from "react";


// interface Props {
//     text: string;
// }
// function MikeAlert({text}:Props) {
//   return (
//     <div className="alert alert-primary">
//       {text}
//     </div>
//   )
// }



// export default MikeAlert

//BY RENAMING THE WORD TEXT TO CHILDREN, IT ALLOWS US TO PASS THE PROP INTO THE PARENT IN BETWEN THE TAGS INSTEAD OF INSIDE OF ONE TAG.
// FOR EXEMPLE, IF YOU DON'T DESIGNATE THE PROP TO CHILDREN, YOU HAVE TO PASS THE PROP LIKE THIS <MikeAlert text='Hello World'/> TO THE PARENT WHICH IS IN APP.TSX IN THIS CASE.
// BY REDESIGNATE THE PROPS TO CHILDREN, YOU CAN PASS IT LIKE BELOW TO THE PARENT: 
    // <MikeAlert>
    //   Hello World
    // </MikeAlert>

// interface Props {
//     children: string;
// }
// function MikeAlert({children}:Props) {
//   return (
//     <div className="alert alert-primary">
//       {children}
//     </div>
//   )
// }

// export default MikeAlert

// IF WE WANTED TO PASS HTML CONTENT "<span>World</span>" INSTEAD OF STRING IN THE PARENT, WHICH IS IN APP.TSX, WE NEED TO CHANGE THE TYPE OF children: to "ReactNode" like below:

interface Props {
    children: ReactNode;
}
function MikeAlert({children}:Props) {
  return (
    <div className="alert alert-primary">
      {children}
    </div>
  )
}

export default MikeAlert