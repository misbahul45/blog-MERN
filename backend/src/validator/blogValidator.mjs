import { body } from "express-validator"
export const blogValidatorQuery = {
    title: {
        notEmpty: {
            errorMessage: "Title cannot be empty"
        },
        isString: {
            errorMessage: "Title must be a string"
        },
        isLength: {
            options: {
                min: 3,
                max: 25
            },
            errorMessage: "Title must be between 3 and 20 characters"
        }
    },
    category: {
        notEmpty:{
            errorMessage:"category Cannot empty"
        },
        isString: {
            errorMessage: "Category must be a string"
        }
    },
    snippet:{
        notEmpty:{
            errorMessage:"category Cannot empty"
        },
        isString: {
            errorMessage: "Category must be a string"
        }
    },
    body:{
        notEmpty:{
            errorMessage:"category Cannot empty"
        },
        isString: {
            errorMessage: "Category must be a string"
        }
    }
};

export const blogValidator = () => {
    return [
      body('title').notEmpty().withMessage('Title cannot be empty').isString().isLength({ min: 3, max: 25 }),
      body('category').notEmpty().withMessage('Category cannot be empty').isString(),
      body('snippet').notEmpty().withMessage('Snippet cannot be empty').isString(),
      body('body').notEmpty().withMessage('Body cannot be empty').isString(),
    ];
  };
export const blogPatchValidator=()=>{
    return[
        body('title').isString().isLength({ min: 3, max: 25 }),
        body('category').isString(),
        body('snippet').isString(),
        body('body').isString(),
    ]
}

