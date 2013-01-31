# A League of Legends Buff Respawn Tracker

I've been playing as a Jungler lately and I'm having a diffcult time at keeping track of the respawn times of the big camps, dragon and baron. It's not difficult at all, all you need to do is a simple addition and type it in the chat. But for some reason I just can't get used to

So I thought of a different approach to keep track of these timers. Being a web developer I built a tiny (really tiny) web app, where you can just click the monster you just killed and a timer would start just below.

I know that many of you don't have or don't want to play with another computer (or laptop) being next to you, so this is why this web app is built with responsive design in mind, so you can use it through a smartphone.

## Usage

**Important: ** The demo is hosted in a free node of the Pagodabox service. If the web app has not being accessed for an hour or more, the server will idle, so there might be a startup lag when you visit it.

* Go [here](http://lol-respawn-tracker.pagodabox.com/) on your browser
* Click (or tap, in your touch device) the monster. This would initiate the timer.
* Click (or tap, in your touch device) again to delete the timer.
* Done.

## Notes

* The app is completly functional, but is only a prototype, no optimization at the moment.
* The web app uses HTML5 so I don't think is going to behave nicely on older versions of IE. Meanwhile use Chrome, Firefox, Safari or Opera to use it.

## Why web?

I know that some people might prefer an overlay, but there are actually quite some reasons of why I did go for web:

* Speed: I wanted to build something quick, on the web enviroment is really easy to prototype.
* Flexibility: You can use this on windows, linux, mac, ios, android, on your smartphone, smartv(maybe :D), laptop, desktop, secondary monitor, etc. You can also download it or you can just enter the url. Lots of options.
* Security: You don't need to download anything, but you can if you want to run this from your own machine.
* Always updated: Everytime you enter the url you will be seeing the most updated version. You don't have to be re-downloading anything (unless you want to run it from your machine) everytime something gets fixed.

## TO DO

* Optimization: No optimization at the moment.
* Testing on different Web Browsers.

## Built with

* HTML5 Boilerplate
* Bootstrap
* Countdown.js
* jQuery

Feedback and bug reports are highly appreciated.

If you are a web developer and you have some tips to increase performance, they are mostly welcome.

## License

The MIT License

Copyright (c) 2006-2012 Stephen M. McKamey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
