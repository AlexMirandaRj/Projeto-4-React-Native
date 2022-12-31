import {
    MD3LightTheme as DefaultTheme,
    MD3DarkTheme as DefaultDarkTheme
} from 'react-native-paper';


const lightTheme = {
    ...DefaultTheme,
    myOwnProperty: true,
    "colors": {
      "primary": "rgb(158, 42, 155)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(255, 215, 245)",
      "onPrimaryContainer": "rgb(56, 0, 56)",
      "secondary": "rgb(109, 88, 105)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(247, 218, 239)",
      "onSecondaryContainer": "rgb(39, 22, 36)",
      "tertiary": "rgb(130, 83, 69)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(255, 219, 209)",
      "onTertiaryContainer": "rgb(50, 18, 8)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(255, 251, 255)",
      "onBackground": "rgb(30, 26, 29)",
      "surface": "rgb(255, 251, 255)",
      "onSurface": "rgb(30, 26, 29)",
      "surfaceVariant": "rgb(238, 222, 231)",
      "onSurfaceVariant": "rgb(78, 68, 75)",
      "outline": "rgb(128, 116, 124)",
      "outlineVariant": "rgb(209, 194, 203)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(52, 47, 50)",
      "inverseOnSurface": "rgb(248, 238, 242)",
      "inversePrimary": "rgb(255, 170, 243)",
      "headerBackground": "rgb(255, 170, 243)",
      "bodyBackground": "gray",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(250, 241, 250)",
        "level2": "rgb(247, 234, 247)",
        "level3": "rgb(244, 228, 244)",
        "level4": "rgb(243, 226, 243)",
        "level5": "rgb(241, 222, 241)"
      },
      "surfaceDisabled": "rgba(30, 26, 29, 0.12)",
      "onSurfaceDisabled": "rgba(30, 26, 29, 0.38)",
      "backdrop": "rgba(55, 46, 52, 0.4)"
    }
}

const darkTheme = {
    ...DefaultDarkTheme,
    myOwnProperty: true,
    "colors": {
        "primary": "rgb(76, 218, 218)",
        "onPrimary": "rgb(0, 55, 55)",
        "primaryContainer": "rgb(0, 79, 79)",
        "onPrimaryContainer": "rgb(111, 247, 246)",
        "secondary": "rgb(176, 204, 203)",
        "onSecondary": "rgb(27, 53, 52)",
        "secondaryContainer": "rgb(50, 75, 75)",
        "onSecondaryContainer": "rgb(204, 232, 231)",
        "tertiary": "rgb(179, 200, 232)",
        "onTertiary": "rgb(28, 49, 75)",
        "tertiaryContainer": "rgb(51, 72, 99)",
        "onTertiaryContainer": "rgb(211, 228, 255)",
        "error": "rgb(255, 180, 171)",
        "onError": "rgb(105, 0, 5)",
        "errorContainer": "rgb(147, 0, 10)",
        "onErrorContainer": "rgb(255, 180, 171)",
        "background": "rgb(25, 28, 28)",
        "onBackground": "rgb(224, 227, 226)",
        "surface": "rgb(25, 28, 28)",
        "onSurface": "rgb(224, 227, 226)",
        "surfaceVariant": "rgb(63, 73, 72)",
        "onSurfaceVariant": "rgb(190, 201, 200)",
        "outline": "rgb(136, 147, 146)",
        "outlineVariant": "rgb(63, 73, 72)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(224, 227, 226)",
        "inverseOnSurface": "rgb(45, 49, 49)",
        "inversePrimary": "rgb(0, 106, 106)",
        "headerBackground": "rgb(25, 28, 28)",
        "headerColorText": "rgb(255, 255, 255)",
        "bodyBackground": "rgb(25, 28, 28)",
        "textColor": "rgb(255, 255, 255)",
        "elevation": {
          "level0": "transparent",
          "level1": "rgb(28, 38, 38)",
          "level2": "rgb(29, 43, 43)",
          "level3": "rgb(31, 49, 49)",
          "level4": "rgb(31, 51, 51)",
          "level5": "rgb(32, 55, 55)"
        },
        "surfaceDisabled": "rgba(224, 227, 226, 0.12)",
        "onSurfaceDisabled": "rgba(224, 227, 226, 0.38)",
        "backdrop": "rgba(41, 50, 50, 0.4)"
      }
}

export {
    lightTheme,
    darkTheme
}