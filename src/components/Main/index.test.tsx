import { render, screen } from '@testing-library/react'
import { Main } from '.';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { rest } from 'msw';
import { setupServer } from 'msw/node'

describe('Main Component', () => {
    const worker = setupServer(
        rest.get("https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC", async (req, res, ctx) => {
            return res(ctx.json([{
                id: 1,
                name: 'Iphone 11 120 GB'
            }]))
        }));

    it('should fetch and show products', async () => {
        render(
            <Provider store={store}>
                <Main />
            </Provider>
        );
        worker.listen();
        await screen.findByText("Iphone 11 128 GB")
    });
})