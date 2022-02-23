export class JwtResponse {
  token: string | undefined;
  type: string | undefined;
  username: string | undefined;
  authorities: string[] | undefined;
}
