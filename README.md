# gddi-components

A library holding some of GDDi's 'mysterious' components.

- [Storybook Page](https://gddi-cn.github.io/gddi-components)
- [CHANGELOG](CHANGELOG.md)

## Installation

```
yarn add gddi-components
```

## Testing

...🚧

## Troubleshooting

### TypeError: self.crypto.randomUUID is not a function

#### Reason
`crypto.randomUUID()` is only available in HTTPS. (https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)