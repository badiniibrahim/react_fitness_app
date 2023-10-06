/// <reference types="react-scripts" />

declare module 'Models'{

    export type Exercises = {
        bodyPart: string;
        equipment: string;
        gifUrl: string;
        id: string;
        name: string;
        target: string;
        secondaryMuscles: string[];
        instructions: string[];
    }

    export type bodyPartList = {

    }

}