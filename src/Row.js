import Cell from "./Cell";
// This Functional Component cycles through each key (using id) of the different objects received from the API . 'Object.entries' destructures each object into an array (for JSON) containing each [key, value] of that object 
//These nested objects (as displayed) can be flattened out using a function re recursion
const Row = ({ item }) => {
  return (
    <tr>
        {Object.entries(item).map(([key, value]) => {
            return (
                <Cell
                    key={key}
                    cellData={JSON.stringify(value)}
                />
            )
        })}
    </tr>
  )
}

export default Row