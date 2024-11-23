import React, { useState } from 'react';
const BubbleSort = () => {

    const [sortedArray, setSortedArray] = useState([])
    const handleSorting = () => {
        let arr = [4, 10, 9, 5, 3, 0]
        for (let j = 0; j < arr.length; j++) {
            for (let i = 0; i <= arr.length; i++) {
                // console.log(i)

                if (arr.length == 1) {
                    return arr
                }
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i + 1]
                    arr[i + 1] = arr[i]
                    arr[i] = temp
                }
            }
        }
        console.log(arr)
        setSortedArray(arr)
        return arr
    }

    const recursion = (arr) => {
        for (let i = 0; i <= arr.length; i++) {
            if (arr.length == 1) {
                return
            }
            let count = 0
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1]
                arr[i + 1] = arr[i]
                arr[i] = temp
                count++
            }

            if (count == 0) {
                return
            }
            console.log(arr, count)
            recursion(arr)
        }

    }

    const handleRecursion = () => {
        let arr = [4, 10, 9, 5, 3, 0];
        let a = recursion(arr)
        console.log(a)
        setSortedArray(a)
    }

    return (
        <div>
            <b>Bubble Sort</b>
            <p>Given Array is : [4,10,9,5,3,0]</p>
            <button onClick={handleSorting}>Iterative Sort</button>
            <button onClick={handleRecursion}>Recursive Sort</button>
            <div>Sorted Array is {sortedArray} </div>
        </div>
    )
}

export default BubbleSort;