export default interface IBrandType {
    stt: number;
    id: number;
    tenThuongHieu: string;
    slug?: string;
    soSp: number;
    ngayTao: Date;
    createdBy?: {
        name: string
    }
};