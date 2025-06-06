# Repro steps

```sh
$ bun i
$ npx expo prebuild -p android
$ cd android

$ npx expo-modules-autolinking resolve --platform android | grep sqlite
              aarFilePath: '/Users/kudo/repro-sdk53-local-aar/modules/testmodule/android/libs/expo.modules.sqlite-15.2.11.aar',

$ ./gradlew :app:dependencies | grep test-aar
# returns nothing
```
