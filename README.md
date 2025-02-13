# Expo Linking.getInitialURL() Intermittently Returns Null

This repository demonstrates a bug in Expo's `Linking` API where `getInitialURL()` sometimes returns `null` even when a deep link is opened. This inconsistency makes handling deep links unreliable.

## Problem

The `Linking.getInitialURL()` method, designed to retrieve the initial URL when the app is launched from a deep link, occasionally fails to return the expected URL and instead returns `null`.  This makes the deep link handling logic unpredictable and prone to errors.

## Reproduction

1. Clone this repository.
2. Run `expo start`.
3. Attempt to open the app using a deep link. Note that the behavior is intermittent; it may work on some attempts and fail on others.  Debugging this issue requires multiple test runs.

## Solution

The provided solution uses a combination of event listeners to ensure the initial URL is reliably captured. This reduces reliance on the potentially unreliable single `getInitialURL()` call. 
