import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import urls from 'src/urls';

import { Button } from 'src/components/Button';
import { H2, Paragraph } from 'src/components/Typography';
import { VerticalSpacer } from 'src/components/Layout';

import { ErrorWrapper } from './styles';

type Props = {
    errorMessage: string;
    retry?: () => void;
};

export const ErrorMessage: FunctionComponent<Props> = ({
    errorMessage,
    retry,
}) => {
    return (
        <ErrorWrapper>
            <H2>Something broke!</H2>
            <VerticalSpacer size='large' />
            <Paragraph>{errorMessage}</Paragraph>
            <VerticalSpacer size='large' />
            {retry ? (
                <>
                    <Button onClick={retry}>Retry</Button>
                    <VerticalSpacer size='medium' />
                </>
            ) : null}
            <Link to={urls.home}>
                <Button color='darkGrey'>Home</Button>
            </Link>
        </ErrorWrapper>
    );
};

export default ErrorMessage;
