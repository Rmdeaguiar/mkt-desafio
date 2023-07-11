import { render, screen } from '@testing-library/react'
import { Header } from '.';

describe('Header Component', () => {

    it('should render Header', () => {
        render(<Header />);
        screen.getByText("MKS")

    })
})