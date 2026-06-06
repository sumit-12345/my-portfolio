export type ProblemCategory = {
  name: string;
  description: string;
  problems: Problem[];
};

export type Solution = {
  language: "C" | "Java";
  code: string;
};

export type Problem = {
  id: number;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  solutions?: Solution[];
};

export const ARRAY_CATEGORIES: ProblemCategory[] = [
  {
    name: "Core Array Basics & Manipulation",
    description: "Fundamental array operations including storage, printing, reversal, and basic manipulation.",
    problems: [
      {
        id: 1,
        title: "Array Store & Print",
        description: "Store elements in an array and print them.",
        difficulty: "Beginner",
        solutions: [
          {
            language: "C",
            code: `#include <stdio.h>

int main() {
    int arr[5];
    int n = 5;
    
    // Store elements
    printf("Enter %d elements:\\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    // Print elements
    printf("Array elements are:\\n");
    for(int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}`,
          },
          {
            language: "Java",
            code: `import java.util.Scanner;

public class ArrayPrint {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = 5;
        int[] arr = new int[n];
        
        // Store elements
        System.out.println("Enter " + n + " elements:");
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        // Print elements
        System.out.println("Array elements are:");
        for(int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
}`,
          },
        ],
      },
      {
        id: 2,
        title: "Array Reverse Display",
        description: "Read n number of values and display them in reverse order.",
        difficulty: "Beginner",
        solutions: [
          {
            language: "C",
            code: `#include <stdio.h>

int main() {
    int arr[5];
    int n = 5;
    
    printf("Enter %d elements:\\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    printf("Array in reverse order:\\n");
    for(int i = n - 1; i >= 0; i--) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}`,
          },
          {
            language: "Java",
            code: `import java.util.Scanner;

public class ArrayReverse {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = 5;
        int[] arr = new int[n];
        
        System.out.println("Enter " + n + " elements:");
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        System.out.println("Array in reverse order:");
        for(int i = n - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
}`,
          },
        ],
      },
      {
        id: 3,
        title: "Array Sum Calculation",
        description: "Find the sum of all elements of the array.",
        difficulty: "Beginner",
        solutions: [
          {
            language: "C",
            code: `#include <stdio.h>

int main() {
    int arr[5];
    int n = 5;
    int sum = 0;
    
    printf("Enter %d elements:\\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }
    
    printf("Sum of array elements: %d\\n", sum);
    
    return 0;
}`,
          },
          {
            language: "Java",
            code: `import java.util.Scanner;

public class ArraySum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = 5;
        int[] arr = new int[n];
        int sum = 0;
        
        System.out.println("Enter " + n + " elements:");
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }
        
        System.out.println("Sum of array elements: " + sum);
    }
}`,
          },
        ],
      },
      {
        id: 4,
        title: "Array Copy",
        description: "Copy the elements of one array into another array.",
        difficulty: "Beginner",
      },
      {
        id: 5,
        title: "Count Duplicate Elements",
        description: "Count the total number of duplicate elements in an array.",
        difficulty: "Beginner",
      },
      {
        id: 6,
        title: "Print Unique Elements",
        description: "Print all unique elements in an array.",
        difficulty: "Beginner",
      },
      {
        id: 7,
        title: "Merge Two Sorted Arrays (Descending)",
        description: "Merge two arrays of the same size sorted in descending order.",
        difficulty: "Intermediate",
      },
      {
        id: 8,
        title: "Frequency of Array Elements",
        description: "Count the frequency of each element of an array.",
        difficulty: "Beginner",
      },
      {
        id: 9,
        title: "Find Maximum & Minimum",
        description: "Find the maximum and minimum elements in an array.",
        difficulty: "Beginner",
        solutions: [
          {
            language: "C",
            code: `#include <stdio.h>

int main() {
    int arr[5];
    int n = 5;
    
    printf("Enter %d elements:\\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    int max = arr[0], min = arr[0];
    
    for(int i = 1; i < n; i++) {
        if(arr[i] > max) max = arr[i];
        if(arr[i] < min) min = arr[i];
    }
    
    printf("Maximum: %d\\n", max);
    printf("Minimum: %d\\n", min);
    
    return 0;
}`,
          },
          {
            language: "Java",
            code: `import java.util.Scanner;

public class MinMax {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = 5;
        int[] arr = new int[n];
        
        System.out.println("Enter " + n + " elements:");
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        int max = arr[0], min = arr[0];
        
        for(int i = 1; i < n; i++) {
            if(arr[i] > max) max = arr[i];
            if(arr[i] < min) min = arr[i];
        }
        
        System.out.println("Maximum: " + max);
        System.out.println("Minimum: " + min);
    }
}`,
          },
        ],
      },
      {
        id: 10,
        title: "Separate Odd & Even Arrays",
        description: "Separate odd and even integers into separate arrays.",
        difficulty: "Intermediate",
      },
      {
        id: 11,
        title: "Sort Array Ascending",
        description: "Sort elements of an array in ascending order.",
        difficulty: "Intermediate",
      },
      {
        id: 12,
        title: "Sort Array Descending",
        description: "Sort the elements of the array in descending order.",
        difficulty: "Intermediate",
      },
      {
        id: 13,
        title: "Insert in Sorted Array",
        description: "Insert a value into a sorted array (maintaining order).",
        difficulty: "Intermediate",
      },
      {
        id: 14,
        title: "Insert in Unsorted Array",
        description: "Insert a value into an array at a specific position.",
        difficulty: "Intermediate",
      },
      {
        id: 15,
        title: "Delete Element from Array",
        description: "Delete an element at a desired position from an array.",
        difficulty: "Intermediate",
      },
      {
        id: 16,
        title: "Second Largest Element",
        description: "Find the second largest element in an array.",
        difficulty: "Intermediate",
      },
      {
        id: 17,
        title: "Second Smallest Element",
        description: "Find the second smallest element in an array.",
        difficulty: "Intermediate",
      },
    ],
  },
  {
    name: "Matrix & 2D Array Problems",
    description: "Matrix operations including addition, multiplication, transpose, and diagonal calculations.",
    problems: [
      {
        id: 18,
        title: "2D Array (3x3) & Matrix Print",
        description: "Create a 2D array of size 3x3 and print the matrix.",
        difficulty: "Beginner",
      },
      {
        id: 19,
        title: "Matrix Addition",
        description: "Add two matrices of the same size.",
        difficulty: "Intermediate",
      },
      {
        id: 20,
        title: "Matrix Subtraction",
        description: "Perform subtraction of two matrices.",
        difficulty: "Intermediate",
      },
      {
        id: 21,
        title: "Matrix Multiplication",
        description: "Multiply two square matrices.",
        difficulty: "Advanced",
      },
      {
        id: 22,
        title: "Transpose of a Matrix",
        description: "Find the transpose of a given matrix.",
        difficulty: "Intermediate",
      },
      {
        id: 23,
        title: "Left Diagonal Sum",
        description: "Find the sum of the right (main) diagonal of a matrix.",
        difficulty: "Intermediate",
      },
      {
        id: 24,
        title: "Right Diagonal Sum",
        description: "Find the sum of the left diagonal of a matrix.",
        difficulty: "Intermediate",
      },
      {
        id: 25,
        title: "Row and Column Sums",
        description: "Find the sum of rows and columns of a matrix.",
        difficulty: "Intermediate",
      },
      {
        id: 26,
        title: "Lower Triangular Matrix",
        description: "Print or zero out the lower triangular matrix.",
        difficulty: "Intermediate",
      },
      {
        id: 27,
        title: "Upper Triangular Matrix",
        description: "Print or zero out the upper triangular matrix.",
        difficulty: "Intermediate",
      },
      {
        id: 28,
        title: "Matrix Determinant",
        description: "Calculate the determinant of a 3x3 matrix.",
        difficulty: "Advanced",
      },
      {
        id: 29,
        title: "Sparse Matrix Check",
        description: "Check whether a given matrix is a sparse matrix.",
        difficulty: "Intermediate",
      },
      {
        id: 30,
        title: "Matrix Equality",
        description: "Check whether two matrices are equal.",
        difficulty: "Beginner",
      },
      {
        id: 31,
        title: "Identity Matrix Check",
        description: "Check if a given matrix is an identity matrix.",
        difficulty: "Intermediate",
      },
    ],
  },
  {
    name: "Advanced Subarrays, Ranges & Target Value Search",
    description: "Complex problems involving subarrays, searching, and optimization techniques.",
    problems: [
      {
        id: 32,
        title: "Pair with Specific Sum",
        description: "Find a pair with a given sum in an array.",
        difficulty: "Intermediate",
      },
      {
        id: 33,
        title: "Majority Element Search",
        description: "Find the majority element in an array (element appearing > n/2 times).",
        difficulty: "Advanced",
      },
      {
        id: 34,
        title: "Number of Occurrences",
        description: "Find the number of times a given number occurs in an array.",
        difficulty: "Beginner",
      },
      {
        id: 35,
        title: "Largest Contiguous Subarray Sum",
        description: "Find the contiguous subarray which has the largest sum.",
        difficulty: "Advanced",
      },
      {
        id: 36,
        title: "Missing Number Search",
        description: "Find the missing number from a sequence of consecutive integers.",
        difficulty: "Intermediate",
      },
      {
        id: 37,
        title: "Pivot Element Selection",
        description: "Find the pivot element of a sorted and rotated array.",
        difficulty: "Advanced",
      },
      {
        id: 38,
        title: "Array Element Rotation",
        description: "Rotate an array by k positions.",
        difficulty: "Advanced",
      },
      {
        id: 39,
        title: "Ceiling and Floor Value",
        description: "Find the ceiling and floor of a target number in a sorted array.",
        difficulty: "Intermediate",
      },
      {
        id: 40,
        title: "Next Greater Element",
        description: "Find the next greater element for every element in an array.",
        difficulty: "Advanced",
      },
      {
        id: 41,
        title: "Inversion Count",
        description: "Count the number of inversions in an array.",
        difficulty: "Advanced",
      },
      {
        id: 42,
        title: "Smallest Missing Positive",
        description: "Find the smallest missing positive element in an unsorted array.",
        difficulty: "Advanced",
      },
      {
        id: 43,
        title: "Subarray with Given Sum",
        description: "Find a continuous subarray that adds up to a given number.",
        difficulty: "Advanced",
      },
      {
        id: 44,
        title: "Zero Sum Subarray",
        description: "Check if there is a subarray with a sum equal to 0.",
        difficulty: "Advanced",
      },
      {
        id: 45,
        title: "Maximum Product Subarray",
        description: "Find the contiguous subarray that has the largest product.",
        difficulty: "Advanced",
      },
      {
        id: 46,
        title: "Minimum Distance Between Two",
        description: "Find the minimum distance between two numbers in an array.",
        difficulty: "Intermediate",
      },
      {
        id: 47,
        title: "Count Smaller Elements on Right",
        description: "Count smaller elements on the right side of each element.",
        difficulty: "Advanced",
      },
      {
        id: 48,
        title: "Elements Greater Than Preceding",
        description: "Print all elements greater than all prior elements.",
        difficulty: "Intermediate",
      },
      {
        id: 49,
        title: "Rearrange Positive & Negative",
        description: "Rearrange an array so that positive and negative numbers alternate.",
        difficulty: "Intermediate",
      },
      {
        id: 50,
        title: "Maximum Difference of Intersections",
        description:
          "Find the maximum difference between any two elements such that the larger element appears after the smaller.",
        difficulty: "Advanced",
      },
      {
        id: 51,
        title: "Maximize Consecutive Ones",
        description: "Find the maximum number of consecutive 1s after flipping at most k zeros.",
        difficulty: "Advanced",
      },
      {
        id: 52,
        title: "Merge Overlapping Intervals",
        description: "Merge overlapping intervals within an array of ranges.",
        difficulty: "Advanced",
      },
      {
        id: 53,
        title: "Trapping Rain Water",
        description: "Calculate the amount of water trapped within an array of heights.",
        difficulty: "Advanced",
      },
      {
        id: 54,
        title: "Equilibrium Index Check",
        description:
          "Find the equilibrium index of an array (where the sum of lower indices equals the sum of higher indices).",
        difficulty: "Intermediate",
      },
      {
        id: 55,
        title: "Leaders in an Array",
        description:
          "Find all the leaders in an array (an element is a leader if it is greater than all elements to its right).",
        difficulty: "Advanced",
      },
      {
        id: 56,
        title: "Minimum Swaps to Sort",
        description: "Find the minimum number of swaps required to sort an array.",
        difficulty: "Advanced",
      },
      {
        id: 57,
        title: "Wave Array Sorting",
        description: "Sort an array in a wave-like fashion (a₀ ≥ a₁ ≤ a₂ ≥ a₃ …).",
        difficulty: "Advanced",
      },
      {
        id: 58,
        title: "Product of Array Except Self",
        description: "Replace each element with the product of every other element.",
        difficulty: "Advanced",
      },
      {
        id: 59,
        title: "Maximum Element in Sliding Window",
        description: "Find the maximum element in every sliding window of size k.",
        difficulty: "Advanced",
      },
      {
        id: 60,
        title: "Subarrays with Distinct Integers",
        description: "Count subarrays with exactly k distinct elements.",
        difficulty: "Advanced",
      },
    ],
  },
  {
    name: "Advanced Data Rearrangements & Conversions",
    description: "Complex algorithms involving bit manipulation, conversions, and optimized solutions.",
    problems: [
      {
        id: 61,
        title: "Segregate 0s and 1s",
        description: "Separate all 0s on the left side and 1s on the right side of an array.",
        difficulty: "Intermediate",
      },
      {
        id: 62,
        title: "Sort Array of 0s, 1s, and 2s",
        description: "Sort an array containing only 0s, 1s, and 2s (Dutch National Flag problem).",
        difficulty: "Advanced",
      },
      {
        id: 63,
        title: "Two Elements Sum Closest to Zero",
        description: "Find the two elements whose sum is closest to zero.",
        difficulty: "Intermediate",
      },
      {
        id: 64,
        title: "Three Elements Sum to Target",
        description: "Find triplets in an array that sum to a given value.",
        difficulty: "Advanced",
      },
      {
        id: 65,
        title: "Four Elements Sum to Target",
        description: "Find quadruplets in an array that sum to a given value.",
        difficulty: "Advanced",
      },
      {
        id: 66,
        title: "Product of All Subarrays",
        description: "Calculate the product of all possible subarrays.",
        difficulty: "Advanced",
      },
      {
        id: 67,
        title: "Replace Element with Next Greater",
        description: "Replace every element with the next greatest element on its right side.",
        difficulty: "Advanced",
      },
      {
        id: 68,
        title: "Rearrange Array by Index Rule",
        description: "Rearrange an array such that arr[i] becomes arr[arr[i]].",
        difficulty: "Advanced",
      },
      {
        id: 69,
        title: "Longest Consecutive Subsequence",
        description: "Find the length of the longest consecutive elements subsequence.",
        difficulty: "Advanced",
      },
      {
        id: 70,
        title: "Minimum Length Unsorted Subarray",
        description: "Find the minimum unsorted subarray sorting which makes the entire array sorted.",
        difficulty: "Advanced",
      },
      {
        id: 71,
        title: "Maximum Sum Without Adjacents",
        description: "Find the maximum sum subsequence such that no two elements are adjacent.",
        difficulty: "Advanced",
      },
      {
        id: 72,
        title: "Count Triplets with Sum Smaller",
        description: "Count triplets with a sum smaller than a given value.",
        difficulty: "Advanced",
      },
      {
        id: 73,
        title: "Longest Subarray with Equal 0s and 1s",
        description: "Find the maximum length subarray having an equal number of 0s and 1s.",
        difficulty: "Advanced",
      },
      {
        id: 74,
        title: "Find All Duplicates in O(n)",
        description:
          "Find all elements that appear more than once in an array with O(n) time complexity.",
        difficulty: "Advanced",
      },
      {
        id: 75,
        title: "Maximum Bitwise AND Pair",
        description: "Find the maximum bitwise AND value generated by any pair in an array.",
        difficulty: "Advanced",
      },
      {
        id: 76,
        title: "Maximum Bitwise OR Subarray",
        description: "Find the maximum bitwise OR sum of a subarray.",
        difficulty: "Advanced",
      },
      {
        id: 77,
        title: "Construct Array from Absolute Differences",
        description: "Form a new array based on the absolute differences of adjacent elements.",
        difficulty: "Advanced",
      },
      {
        id: 78,
        title: "Kth Smallest Element",
        description: "Find the k-th smallest element in an unsorted array.",
        difficulty: "Advanced",
      },
      {
        id: 79,
        title: "Kth Largest Element",
        description: "Find the k-th largest element in an unsorted array.",
        difficulty: "Advanced",
      },
      {
        id: 80,
        title: "Elements with Absolute Difference K",
        description: "Count pairs with a given absolute difference k.",
        difficulty: "Advanced",
      },
      {
        id: 81,
        title: "Check for Duplicate Within K Distance",
        description: "Check if the array contains duplicates within k distance of each other.",
        difficulty: "Intermediate",
      },
      {
        id: 82,
        title: "Maximum Distance Between Two Indices",
        description: "Find the maximum index difference (j - i) such that arr[j] > arr[i].",
        difficulty: "Advanced",
      },
      {
        id: 83,
        title: "Count Subarrays with Odd Sum",
        description: "Find the total number of subarrays whose sum is odd.",
        difficulty: "Intermediate",
      },
      {
        id: 84,
        title: "Count Subarrays with Even Sum",
        description: "Find the total number of subarrays whose sum is even.",
        difficulty: "Intermediate",
      },
      {
        id: 85,
        title: "Check if Array Forms Arithmetic Progression",
        description: "Determine if array items can be rearranged to form an AP.",
        difficulty: "Intermediate",
      },
      {
        id: 86,
        title: "Minimize Heights Difference",
        description: "Adjust array values up or down by k to minimize the difference between maximum and minimum heights.",
        difficulty: "Advanced",
      },
      {
        id: 87,
        title: "Spiral Matrix Printing",
        description: "Print a 2D matrix in spiral form.",
        difficulty: "Advanced",
      },
      {
        id: 88,
        title: "Diagonal Matrix Printing",
        description: "Print a matrix diagonally.",
        difficulty: "Advanced",
      },
      {
        id: 89,
        title: "Max Sum Path in Two Arrays",
        description:
          "Find the maximum sum path involving steps across two sorted arrays at intersection points.",
        difficulty: "Advanced",
      },
      {
        id: 90,
        title: "Circular Subarray Maximum Sum",
        description: "Find the maximum sum of a circular contiguous subarray.",
        difficulty: "Advanced",
      },
      {
        id: 91,
        title: "Subarray with Equal Average",
        description: "Split an array into two parts such that their averages are equal.",
        difficulty: "Advanced",
      },
      {
        id: 92,
        title: "Find Point of Maximum Intersection",
        description: "Given arrival and departure time arrays, find the time slot with maximum guests.",
        difficulty: "Advanced",
      },
      {
        id: 93,
        title: "Print All Unique Subsets",
        description: "Print all unique subsets of a given array.",
        difficulty: "Advanced",
      },
      {
        id: 94,
        title: "Count Strictly Increasing Subarrays",
        description: "Calculate the total number of strictly increasing subarrays.",
        difficulty: "Intermediate",
      },
      {
        id: 95,
        title: "Rearrange in Max/Min Form",
        description: "Rearrange a sorted array into alternating maximum and minimum elements.",
        difficulty: "Intermediate",
      },
      {
        id: 96,
        title: "Minimum Initial Energy to Cross",
        description: "Calculate the minimum initial energy needed to cross an array of step penalties.",
        difficulty: "Advanced",
      },
      {
        id: 97,
        title: "Find Repeating and Missing Elements",
        description: "Identify the one missing and one repeating value in an array sequence.",
        difficulty: "Advanced",
      },
      {
        id: 98,
        title: "Smallest Subarray with Sum Greater Than X",
        description: "Find the minimum length of a subarray whose elements sum to more than x.",
        difficulty: "Advanced",
      },
      {
        id: 99,
        title: "Frequency Sort",
        description: "Sort array elements by their frequency of occurrence.",
        difficulty: "Intermediate",
      },
      {
        id: 100,
        title: "Count Pairs with Given Sum in Matrices",
        description: "Find pairs with a given sum across two distinct 2D matrices.",
        difficulty: "Advanced",
      },
      {
        id: 101,
        title: "Shuffle an Array Dynamically",
        description: "Implement the Fisher-Yates shuffle algorithm for an array.",
        difficulty: "Intermediate",
      },
      {
        id: 102,
        title: "Matrix Rotation by 90 Degrees",
        description: "Rotate a 2D matrix clockwise or counterclockwise by 90 degrees.",
        difficulty: "Advanced",
      },
      {
        id: 103,
        title: "Median of Two Sorted Arrays",
        description: "Find the median value when merging two independent sorted arrays.",
        difficulty: "Advanced",
      },
      {
        id: 104,
        title: "Count Distinct Elements in Every Window",
        description: "Given a window size k, count distinct entries in every window slice.",
        difficulty: "Advanced",
      },
      {
        id: 105,
        title: "Sort Array by Absolute Difference",
        description: "Sort array elements based on their absolute difference from a given target value.",
        difficulty: "Intermediate",
      },
      {
        id: 106,
        title: "Construct Product Array Vector",
        description: "Build a product vector space layout mapping.",
        difficulty: "Advanced",
      },
      {
        id: 107,
        title: "Check for Subset Subarray Matrix",
        description: "Verify if a given small matrix or array matches a continuous slice of a parent dataset.",
        difficulty: "Advanced",
      },
    ],
  },
];

