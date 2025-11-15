/* eslint-disable */

/* 
* THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT IT MANUALLY!
* 
* Supported languages in the "locales folder": en, ru, uk
* MAKE SURE THAT THE SUPPORTED LANGUAGES ARE SPECIFIED IN THE I18N CONFIG!
*
* The main language for types: en
* Generated at: 2025-11-15T14:46:00.077Z
*
* Run 'yarn i18n:generate-types' to regenerate this file
*/

interface CommonResources {
  mode: string
  locale: string
}

interface PagesResourcesHome {
  title: string
  heading: string
  description: string
}

interface PagesResources {
  home: PagesResourcesHome
}

interface Resources {
  common: CommonResources
  pages: PagesResources
}

export type CommonKeys = 'mode' | 'locale'

export type PagesKeys = 'home.title' | 'home.heading' | 'home.description'

export type AllTranslationKeys = CommonKeys | PagesKeys

export type NamespacedTranslationKeys = 'common:mode' | 'common:locale' | 'pages:home.title' | 'pages:home.heading' | 'pages:home.description'

export type TranslationKey = NamespacedTranslationKeys

export type ExtractNamespace<T extends NamespacedTranslationKeys> = 
  T extends `${infer NS}:${string}` ? NS : never

export type ExtractKeyPath<T extends NamespacedTranslationKeys> = 
  T extends `${string}:${infer K}` ? K : never

export type KeysForNamespace<NS extends keyof Resources> =   NS extends 'common' ? CommonKeys :
  NS extends 'pages' ? PagesKeys :
  never

export type { Resources }
