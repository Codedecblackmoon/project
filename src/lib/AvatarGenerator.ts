// import seedrandom from "seedrandom";

// export class AvatarGenerator {
//   generateRandomAvatar(seed?: string) {
//     const rng = seed ? seedrandom(seed) : seedrandom();

//     // Hair / hats
//     const topTypeOptions = [
//       "NoHair",
//       "ShortHairShortFlat",
//       "ShortHairSides",
//       "LongHairStraight",
//       "LongHairCurly",
//       "LongHairFro",
//       "WinterHat1",
//       "WinterHat2",
//     ];

//     // Glasses / none
//     const accessoriesTypeOptions = ["Blank", "Round", "Sunglasses"];

//     // Shirts / hoodies / overalls
//     const clotheTypeOptions = [
//       "GraphicShirt",
//       "Hoodie",
//       "Overall",
//       "ShirtCrewNeck",
//       "ShirtVNeck",
//     ];

//     // Eyes
//     const eyeTypeOptions = ["Default", "Happy", "Wink", "Hearts", "Surprised"];

//     // Eyebrows
//     const eyebrowTypeOptions = ["Default", "RaisedExcited", "UpDown"];

//     // Mouths (expressions)
//     const mouthTypeOptions = ["Smile", "Twinkle", "Tongue", "Default"];

//     // Skin tones
//     const skinColorOptions = [
//       "Tanned",
//       "Pale",
//       "Light",
//       "Brown",
//       "DarkBrown",
//       "Black",
//     ];

//     // Hair colors
//     const hairColorTypes = [
//       "Black",
//       "Brown",
//       "BrownDark",
//       "Blonde",
//       "BlondeGolden",
//       "Red",
//       "PastelPink",
//     ];

//     // Clothes / hat colors
//     const colorOptions = [
//       "PastelBlue",
//       "PastelGreen",
//       "PastelOrange",
//       "PastelRed",
//       "PastelYellow",
//       "Pink",
//       "White",
//     ];

//     // Random picker helper
//     const pick = (arr: string[]) => arr[Math.floor(rng() * arr.length)];

//     return `https://avataaars.io/?avatarStyle=Transparent
//       &topType=${pick(topTypeOptions)}
//       &accessoriesType=${pick(accessoriesTypeOptions)}
//       &clotheType=${pick(clotheTypeOptions)}
//       &clotheColor=${pick(colorOptions)}
//       &eyeType=${pick(eyeTypeOptions)}
//       &eyebrowType=${pick(eyebrowTypeOptions)}
//       &mouthType=${pick(mouthTypeOptions)}
//       &skinColor=${pick(skinColorOptions)}
//       &hairColor=${pick(hairColorTypes)}
//       &hatColor=${pick(colorOptions)}`
//       .replace(/\s+/g, ""); // remove spaces/newlines
//   }
// }

import seedrandom from "seedrandom";

export class AvatarGenerator {
  generateRandomAvatar(seed?: string) {
    const rng = seed ? seedrandom(seed) : seedrandom();

    // Hats and head accessories (rendered on top)
    const topTypeOptions = [
      "NoHair",
      "Eyepatch",
      "WinterHat1",
      "WinterHat2",
      "WinterHat3",
      "WinterHat4",
      "Hat",
      "Hijab",
      "Turban",
    ];

    // Facial accessories (glasses, etc.)
    const accessoriesTypeOptions = ["Blank", "Round", "Sunglasses"];

    // Clothing (base layer)
    const clotheTypeOptions = [
      "GraphicShirt",
      "Hoodie",
      "Overall",
      "ShirtCrewNeck",
      "ShirtVNeck",
    ];

    // Eyes
    const eyeTypeOptions = ["Default", "Happy", "Wink", "Hearts", "Surprised"];

    // Eyebrows
    const eyebrowTypeOptions = ["Default", "RaisedExcited", "UpDown"];

    // Mouths (expressions)
    const mouthTypeOptions = ["Smile", "Twinkle", "Tongue", "Default"];

    // Skin tones
    const skinColorOptions = [
      "Tanned",
      "Pale",
      "Light",
      "Brown",
      "DarkBrown",
      "Black",
    ];

    // Hair colors
    const hairColorTypes = [
      "Black",
      "Brown",
      "BrownDark",
      "Blonde",
      "BlondeGolden",
      "Red",
      "PastelPink",
    ];

    // Colors for clothes and accessories
    const colorOptions = [
      "PastelBlue",
      "PastelGreen",
      "PastelOrange",
      "PastelRed",
      "PastelYellow",
      "Pink",
      "White",
      "Black",
      "Gray01",
      "Gray02",
    ];

    // Hair styles (rendered first, behind hats)
    const hairTypeOptions = [
      "NoHair",
      "ShortHairShortFlat", 
      "ShortHairSides",
      "LongHairStraight",
      "LongHairCurly",
      "LongHairFro",
    ];

    // Random picker helper
    const pick = (arr: string[]) => arr[Math.floor(rng() * arr.length)];

    // Select hair or hat (not both for better layering)
    const useHat = rng() > 0.7; // 30% chance for hat
    const selectedTopType = useHat ? pick(topTypeOptions.filter(t => t !== "NoHair")) : pick(hairTypeOptions);

    return `https://avataaars.io/?avatarStyle=Transparent
      &clotheType=${pick(clotheTypeOptions)}
      &clotheColor=${pick(colorOptions)}
      &eyeType=${pick(eyeTypeOptions)}
      &eyebrowType=${pick(eyebrowTypeOptions)}
      &topType=${selectedTopType}
      &accessoriesType=${pick(accessoriesTypeOptions)}
      &hatColor=${pick(colorOptions)}
      &mouthType=${pick(mouthTypeOptions)}
      &skinColor=${pick(skinColorOptions)}
      &hairColor=${pick(hairColorTypes)}
      &hatColor=${pick(colorOptions)}`
      .replace(/\s+/g, ""); // remove spaces/newlines
  }
}

