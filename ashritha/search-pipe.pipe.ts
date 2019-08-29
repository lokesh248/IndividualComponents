import { Pipe, PipeTransform } from '@angular/core';
import { Accounts } from './accounts';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(accounts: Accounts[], args: any): Accounts[] {
    if (args != undefined) {
      let resultantAccounts = accounts.filter(account => account.accNum.toUpperCase().indexOf(args.toUpperCase()) !== -1);
      return resultantAccounts;

  }
  else {
      return accounts;
  }
  }

}
