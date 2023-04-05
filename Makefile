all: src bundle
.PHONY: all

src:
	cd src && npm run build
.PHONY: src

bundle:
	mkdir -p build && rm -f build/better-meta-boxes.zip
	zip -r - *.php components > build/better-meta-boxes.zip
.PHONY: bundle
