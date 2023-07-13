import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '.';
import { Provider } from 'react-redux';
import { StoresProvider } from '../../stores';
import store from '../../redux/store';

describe('Header Component', () => {

    it('should render Header', () => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        );
        screen.getByText("MKS");
        screen.getByText("Sistemas");
    });

    it('should open the cart aside', () => {
        render(
            <StoresProvider>
                <Provider store={store}>
                    <Header />
                </Provider>
            </StoresProvider>
        );
        const button = screen.getByRole('img');
        fireEvent.click(button);
        screen.getByText('Carrinho de compras');
    })
})