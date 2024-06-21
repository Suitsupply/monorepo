/* eslint-disable sonarjs/no-duplicate-string */
import { ProgressBar } from '@headless-commerce/components/ProgressBar/ProgressBar';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

describe('ProgressBar', () => {
  afterEach(cleanup);

  describe('When no props are provided', () => {
    it('renders with no props', () => {
      render(<ProgressBar />);
      const progressBar = screen.getByTestId('progress-bar');
      expect(progressBar.getAttribute('style')).toBe('--progress: 0%;');
    });
  });

  describe('When the percentage prop is not provided', () => {
    describe('When the step and steps props are not provided', () => {
      it('renders with no props', () => {
        render(<ProgressBar />);
        const progressBar = screen.getByTestId('progress-bar');
        expect(progressBar.getAttribute('style')).toBe('--progress: 0%;');
      });
    });

    describe('When the step prop is provided', () => {
      it('renders with step prop', () => {
        render(<ProgressBar step={5} />);
        const progressBar = screen.getByTestId('progress-bar');
        expect(progressBar.getAttribute('style')).toBe('--progress: 50%;');
      });
    });

    describe('When the steps prop is provided', () => {
      it('renders with steps prop', () => {
        render(<ProgressBar steps={20} />);
        const progressBar = screen.getByTestId('progress-bar');
        expect(progressBar.getAttribute('style')).toBe('--progress: 0%;');
      });
    });

    describe('When the step and steps props are provided', () => {
      it('renders with step and steps props', () => {
        render(<ProgressBar step={5} steps={20} />);
        const progressBar = screen.getByTestId('progress-bar');
        expect(progressBar.getAttribute('style')).toBe('--progress: 25%;');
      });
    });
  });

  describe('When the percentage prop is provided', () => {
    describe('When the step and steps props are provided', () => {
      it('renders with percentage prop', () => {
        render(<ProgressBar step={5} steps={20} percentage={75} />);
        const progressBar = screen.getByTestId('progress-bar');
        expect(progressBar.getAttribute('style')).toBe('--progress: 75%;');
      });
    });

    describe('When the step and steps props are not provided', () => {
      it('renders with percentage prop', () => {
        render(<ProgressBar percentage={75} />);
        const progressBar = screen.getByTestId('progress-bar');
        expect(progressBar.getAttribute('style')).toBe('--progress: 75%;');
      });
    });
  });
});
