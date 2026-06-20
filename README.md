# ph-gcash

GCash number validation and formatting for Philippine mobile payments.

## Installation

```bash
npm install ph-gcash
```

## Features

- 📱 GCash number formatting
- ✅ GCash number validation
- 🔄 Multiple format support

## Usage

```typescript
import { formatGCash, validateGCash } from 'ph-gcash';

formatGCash('09171234567'); // '+639171234567'
validateGCash('09171234567'); // true
```

## License

MIT


## API

See source code and JSDoc comments for full API documentation.
All exported functions include TypeScript types.
