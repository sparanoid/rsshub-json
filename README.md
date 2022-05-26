# RSSHub JSON Mode

RSSHub but in JSON format.

- [Docker Hub](https://hub.docker.com/r/sparanoid/rsshub-json)
- [ghcr.io](https://github.com/users/sparanoid/packages/container/package/rsshub-json)

## Usage

Run with Docker:

```fish
docker run --rm --init -p 1200:1200 \
  -e "CACHE_EXPIRE=5" \
  sparanoid/rsshub-json:local
```

All the [environment variables](https://docs.rsshub.app/en/install/#configuration-3) can be inherited from the original project


## License

MIT
