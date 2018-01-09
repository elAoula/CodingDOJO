export class Model {
    name: string;
}

export class ProgramInfo {
    channelname: string;
    programs: Program[];
}

export class Program {
    id: number;
    name: string;
    simple_start_time: string;
    simple_end_time: string;
    start_time: string;
    end_time: string;
}