import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { Button , Col, Container, Row, Image } from 'react-bootstrap';
import { UserContext } from '../../auth/UserContext';
import { User, UserContextType } from '../../types/UserTypes';
import { getAuthURL } from '../../auth/AuthUtil';

const HomePage = () => {
    const { user, updateUser } = useContext(UserContext) as UserContextType;
    const hasActiveSession : boolean = useMemo(() => user != null, [user])
    
    useEffect(() => {
        if (user === null) {
            window.location.href = getAuthURL();
        }
    }, [user]);

    return ( 
        <div>
            {hasActiveSession && (
                <Container>
                    <Row>
                        <h1>
                            Welcome
                        </h1>                            
                        <br/>
                    </Row>
                    <Row>
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default HomePage;