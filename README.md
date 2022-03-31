# μtils

μtils (or Mutils or "micro tools") is a cross-platform alternative to [DevToys](https://devtoys.app/). μtils provides various little tools for developers, all in one place.

## Features

* Cross-platform: The goal of this project is to have a single app that will run on all platforms.
* Theming: μtils will come out of the box with multiple built-in themes (under construction) and will eventually allow user-defined themes as well. 

### Tools

* JSON to YAML (and vice versa) converter
* Number base converter (decimal, hex, octal, binary)
* HTML encoder/decoder
* URL encoder
* Base64 encoder/decoder
* JWT decoder (under construction)
* Hash generator (under construction)
* UUID generator (under construction)
* Case converter (under construction)
* Regex tester (under construction)

## Installation

Right now the only way to use the app is to build it yourself, but it's very easy. 

* Clone this repo and navigate to it in your terminal: `git clone git@github.com:mutils/mutils-app.git && cd mutils-app`.
* `npm i` to install dependencies.
* `npm run package` to build the application.
* μtils will be built under `./out/mutils-{platform}/` for me on Linux that's `./out/mutils-linux-x64/`.
* Run the `mutils` binary.

## Alternatives

### DevToys

[DevToys](https://devtoys.app/) is a very cool app that unfortunately is limited to Windows. If you already use Windows I encourage you to use DevToys instead.

### DevToysMac

[DevToysMac](https://github.com/ObuchiYuki/DevToysMac) is a port of the original DevToys over to Mac. I haven't used this myself but if you're on Mac it's probably worth checking out. 

### Web browser

All of the tools found in μtils and the alternatives above can also be found scattered around various websites. These offline apps simply exist for convenience and privacy. 

## Contributing

μtils is in very early development so there's lots of work to be done. Right now I'm working on getting basic functionality for every tool in place and on Electron stuff like desktop/dock icons on all platforms.

All contributions are welcome, here's a list of things you can do to help:

* Use the app and give your honest feedback.
* Submit bug reports.
* Submit feature requests.
* Develop some improvements and submit a PR.
* Create new themes or improve old ones. 
