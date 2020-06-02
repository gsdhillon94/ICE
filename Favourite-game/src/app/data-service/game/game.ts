export class Game {
  constructor(
    public hteam: string,
    public is_grand_final: number,
    public ascore: number,
    public updated: Date,
    public hgoals: number,
    public abehinds: number,
    public hbehinds: number,
    public hscore: number,
    public ateamid: number,
    public id: number,
    public is_final: number,
    public complete: number,
    public winner: string,
    public round: number,
    public year: number,
    public venue: string,
    public winnerteamid: number,
    public agoals: number,
    public ateam: string,
    public date: Date,
    public hteamid: number,
    public tz: string
  ) {}
}
