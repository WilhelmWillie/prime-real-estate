# Prime Real Estate
Prime Real Estate is a fun app born out of an idea I had while walking around the rich streets of San Francisco.

"Wow, these houses must be pretty expensive. I wonder how much they are"

Idea is simple: scan your current location and get an approximate estimate of the average property value.

From there, you can save scans, share them with friends, and revel in how cheap/expensive properties are in certain areas.

## Tech Stack
Prime Real Estate is built using React Native + TypeScript. It uses React hooks for state management and `react-navigation` for mobile navigation.

## Why?
I've had this app idea in my head for a while. Walking around San Francisco is an experience in and of itself in that the feel/vibe of your locale can change dramatically from street to street. I built this app for a couple reasons:

* To tighten up my React/Native development skills (hooks, styled-components, navigation, using device services like location)
* To use in the field and see how housing prices range in different cities

## Zillow API
Currently, I use the Zillow API to get the approximate estimate of the average property value. The way this works is that when you scan your location, the app will hit Zillow's neighborhood API and get a list of neighborhood coordinates and housing values. The app will search for the closest neighborhood from that API hit and present to you the estimated property value of that neighborhood.

Admittedly, this isn't the best way to do what this app originally intended. Unfortunately, real estate data isn't cheap or freely obtainable so I had to make do with what was available.

Maybe some day I'll revisit this app if I discover a better way to get real estate prices. Ideally, I could sample a small radius of properties as even within a neighborhood, property values can fluctuate wildly based off different factors (ex: being next to public transit, proximity to amenities, etc)
