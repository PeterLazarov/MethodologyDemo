import styled from 'styled-components';
import { Table } from "antd";
import Backdrop from '@material-ui/core/Backdrop';

export const StyledBackdrop = styled(Backdrop)`
    z-index: 99999 !important;
    color: white;
`

export const AntdDataTable = styled(Table)`
    margin: 0 20px;
`

export const StyledForm = styled.form`
    padding-bottom: 5px;
`

export const StyledFormRow = styled.div`
    display: flex;
    padding: 3px 0;
`