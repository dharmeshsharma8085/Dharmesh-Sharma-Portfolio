import React, {StrictMode, Component, ErrorInfo, ReactNode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  override state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in portfolio application:', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#050505',
          color: '#F5F5F5',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{
            maxWidth: '560px',
            backgroundColor: '#111111',
            border: '1px solid rgba(255, 106, 0, 0.3)',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.8)'
          }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FF6A00', marginBottom: '0.75rem' }}>
              Application Recovery Mode
            </h1>
            <p style={{ color: '#A1A1A1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              The application encountered an unexpected issue while rendering.
            </p>
            {this.state.error && (
              <pre style={{
                backgroundColor: '#080808',
                color: '#FF8A2A',
                padding: '1rem',
                borderRadius: '12px',
                fontSize: '0.8rem',
                textAlign: 'left',
                overflowX: 'auto',
                marginBottom: '1.5rem'
              }}>
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#FF6A00',
                color: '#000000',
                border: 'none',
                borderRadius: '9999px',
                padding: '0.75rem 1.75rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Reload Portfolio
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);

