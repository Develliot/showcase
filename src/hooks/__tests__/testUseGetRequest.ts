import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { useGetRequest } from '../useGetRequest';

test('useGetRequest performs GET request', async () => {
    const initialValue: any[] = [];
    const mock = new MockAdapter(axios);

    const mockData = 'response';
    const url = 'http://mock';
    mock.onGet(url).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() =>
        useGetRequest(url, initialValue)
    );

    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual('response');
    expect(result.current.isLoading).toBeFalsy();
});

test('useGetRequest performs throws an error', async () => {
    const initialValue: any[] = [];
    const mock = new MockAdapter(axios);

    const mockData = 'response';
    const url = 'http://mock';
    mock.onGet(url).reply(500, mockData);

    const { result, waitForNextUpdate } = renderHook(() =>
        useGetRequest(url, initialValue)
    );
    expect(result.current.isError).toBeFalsy();
    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.isError).toBeTruthy();
    expect(result.current.isLoading).toBeFalsy();
});
