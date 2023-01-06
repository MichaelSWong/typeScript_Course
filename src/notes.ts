// Interface Notes

// Interfaces are good for public apis
interface MyPropsInterface {
  url: string;
}

// interfaces can be redeclared
interface MyPropsInterface {
  alt: string;
}

// and later remerged
const props: MyPropsInterface = {
  url: 'https://example.com',
  alt: 'example thing',
};

// Types Note
// Usually for a private code base
// Can not be redeclared

type MyPropsType = {
  url: string;
};

/**
  if (isPublicApi) {
    interfaces
  } else {
    types
  }
 */

export {};
