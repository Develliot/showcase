import { camelCaseToCaptilalisedCase } from '../StringUtils';

// not much point testing not visible because snapshot
// won't capture changes in styled component
it('converts cammel case string to sentence case strings correcty', () => {
    expect(camelCaseToCaptilalisedCase('ThisIsACamelCaseString')).toEqual(
        'This Is A Camel Case String'
    );
    expect(camelCaseToCaptilalisedCase('thisIsACamelCaseString')).toEqual(
        'This Is A Camel Case String'
    );
    expect(camelCaseToCaptilalisedCase('this')).toEqual('This');
});
