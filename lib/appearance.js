export const appearance = {
  theme: 'flat',
  variables: {
    fontFamily: ' "Manrope", sans-serif',
    fontSizeBase: '14px',
    fontLineHeight: '1.5',
    borderRadius: '8px',
    colorBackground: '#F6F8FA',
    colorPrimaryText: '#262626',
  },
  rules: {
    '.Block': {
      backgroundColor: 'var(--colorBackground)',
      boxShadow: 'none',
    },
    '.Input': {
      padding: '18.5px 24px',
    },
    '.Input:disabled, .Input--invalid:disabled': {
      color: 'lightgray',
    },
    '.Tab': {
      padding: '10px 12px 8px 12px',
      margin: '0 12px 24px 0',
      border: 'none',
    },
    '.TabIcon': {
      color: 'var(--colorIconTab)',
    },
    '.Tab:hover': {
      border: 'none',
      boxShadow:
        '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)',
    },
    '.Tab--selected:focus, .Tab--selected:hover': {
      border: 'none',
      backgroundColor: '#fff',
    },
    '.Tab--selected': {
      border: '1px solid #d87d4a',
      backgroundColor: '#fff',
    },
    '.TabIcon--selected': {
      color: '#000',
    },
    '.Label': {
      fontWeight: '700',
      fontSize: '12px',
      margin: '0 0 7.8px 0',
    },
    '.Input': {
      border: '1px solid #cfcfcf',
      margin: '0 0 24px 0',
      backgroundColor: '#fff',
    },
    '.Error': {
      margin: '-14px 0 8px 0',
    },
  },
}
