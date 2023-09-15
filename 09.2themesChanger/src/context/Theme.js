import {createContext, useContext} from 'react';
export const ThemeContext = createContext({
    themeMode:'light',
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export default  function useTheme(){
    return useContext(ThemeContext)
}


// // // let arr = [3,4,6,7,3,2,4,5,6,7,8]
// // // let temp;
// // // for (let i = 0; i < arr.length; i++) {
// // //     for (let j = 0; j < arr.length; j++) {
// // //         if(arr[j]>=arr[j+1]){
// // //             temp = arr[j]
// // //             arr[j]= arr[j+1]
// // //             arr[j+1] = temp
// // //         }
        
// // //     }
// // // }
// // // console.log(arr)

// let arr = [34,45,56,67,78,789]
// function searchElement(arrey, element) {
//     for(let i=0; i<=arrey.length;i++){
//         if(arrey[i]==element) return console.log(i)
        
//     }
// }

// searchElement(arr,78)