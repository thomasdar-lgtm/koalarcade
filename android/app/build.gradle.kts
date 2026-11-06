plugins {
    id("com.android.application")
}

android {
    namespace = "com.koala.arcade"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.koala.arcade"
        minSdk = 26
        targetSdk = 34
        versionCode = 1
        versionName = "1.0.0"
    }

    signingConfigs {
        create("release") {
            storeFile = file("koalarcade.jks")
            storePassword = "koalarcade"
            keyAlias = "koalarcade"
            keyPassword = "koalarcade"
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            signingConfig = signingConfigs.getByName("release")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}
