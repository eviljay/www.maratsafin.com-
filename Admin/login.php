<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

<html dir="ltr">
<head>
<title>Welcome to Safin Official Site Manager</title>
<meta name="title" content="Welcome to Safin Official Site Manager">
<meta name="author" content="Comrax Ltd.">
<meta name="generator" content="PHP Editor">
<meta name="copyright" content="Copyright � Comrax Ltd., 1999-2007. All rights reserved.">
<meta name="description" content="Welcome to Safin Official Site Manager">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link rel="stylesheet" href="/Admin/style.php" type="text/css">

<script language="JavaScript" type="text/javascript">
<!--
  if( top != self ) {
    top.location = self.location;
  }
  function ViewAdminInfo( id ) {
    if( id ) {
      document.EditMyDetailsForm.id.value = id;
    }
    document.EditMyDetailsForm.submit( );
  }
  function mainmenu( node, image, path ) {
    target = node;
    if( !path ) {
      path = "";
     }
    if( target.style.display == "none" ) {
      target.style.display  = "block";
      document[ image ].src = "http://www.maratsafin.com/Images/Admin/" + path + "button-menu-" + image + "-on.gif";
    } else {
      target.style.display  = "none";
      document[ image ].src = "http://www.maratsafin.com/Images/Admin/" + path + "button-menu-" + image + ".gif";
    }
  }
  ErrorRaised = false;
  LoggedUser  = '';
// -->
</script>
</head>

<body onLoad="if(ErrorRaised){RaiseError();}" bgcolor="ffffff" text="000000" link="0000ff" vlink="ff0000" alink="ff0000" hlink="ff0000" marginwidth="0" marginheight="0" topmargin="0" leftmargin="0" bottommargin="0" rightmargin="0">

<!-- PortalCE Logo and Administrator System Title: Start -->
<table width="100%" border="0" cellpadding="0" cellspacing="0">

<form method="post" action="/Admin/administrators.php" name="EditMyDetailsForm">
<input type="hidden" name="act" value="edit">
<input type="hidden" name="id" value="">
</form>

<tr>
<td colspan="4"><img src="http://www.maratsafin.com/Images/Admin/space.gif" border="0" width="1" height="10"></td>
</tr>

<tr>
<td width="10"><img src="http://www.maratsafin.com/Images/Admin/space.gif" border="0" width="10" height="1"></td>
<td width="50%"><img src="http://www.maratsafin.com/Images/Admin/../title-admin.gif" border="0" width="349" height="47"></td>
<td align="right" width="50%"><img src="http://www.maratsafin.com/Images/Admin/../logo.gif" border="0" width="220" height="57"></td>
<td width="10"><img src="http://www.maratsafin.com/Images/Admin/space.gif" border="0" width="10" height="1"></td>
</tr>

<tr>
<td colspan="4"><img src="http://www.maratsafin.com/Images/Admin/space.gif" border="0" width="1" height="10"></td>
</tr>

</table>
<!-- PortalCE Logo and Administrator System Title: End -->

<!-- Status bar: Start -->
<table width="100%" border="0" cellpadding="0" cellspacing="0">

<tr>
<td colspan="4" width="100%" bgcolor="#6c78b5"><img src="http://www.maratsafin.com/Images/Admin/space.gif" border="0" width="1" height="1"></td>
</tr>

<tr>
<td width="10" bgcolor="#fff0d8"><img src="http://www.maratsafin.com/Images/Admin/space.gif" border="0" width="10" height="1"></td>
<td width="70%" bgcolor="#fff0d8" nowrap><font class="LoFontSize">Welcome...</font></td>
<td width="30%" align="left" bgcolor="#fff0d8" nowrap></td>
<td width="10" bgcolor="#fff0d8"><img src="http://www.maratsafin.com/Images/Admin/space.gif" border="0" width="10" height="1"></td>
</tr>

<tr>
<td colspan="4" width="100%" bgcolor="#6c78b5"><img src="http://www.maratsafin.com/Images/Admin/space.gif" border="0" width="1" height="1"></td>
</tr>
</table>
<!-- Status bar: End -->

<!-- Working area: Start -->
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr valign="top">

<td width="10"><img src="http://www.maratsafin.com/Images/Admin/space.gif" border="0" width="10" height="1"></td>
<td width="100%"><table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td><img src="http://www.maratsafin.com/Images/Admin/space.gif" border="0" width="1" height="10"></td>
</tr>

<tr>
<td width="100%">
<p><b>Please enter your username and password, and then press on "<b><font color="#0075bb">Logon to System</font></b>" to continue.</b></p>
<p>Please make sure you activated the option "<b><span dir="ltr">Save Cookies</span></b>" in your browser before you use this system.</p>
<p>If you encounter difficulties entering this system, and you're positive that you've entered the correct username and password, please contact <b><font color="#0075bb">technical support</font></b> (phone number <span dir="ltr"><b>03-5631330</b></span>) for technical assistance.</p>
<p><table border="0" cellpadding="0" cellspacing="0">
<form method="post" action="/Admin/login.php" name="LoginForm">

<tr>
<td><b>Username:</b></td>
<td rowspan="2">&nbsp;&nbsp;&nbsp;</td>
<td><b>Password:</b></td>
</tr>

<tr>
<td><input type="text" name="formUsername" value="" size="25" maxlength="12" dir="ltr"></td>
<td><input type="password" name="formPassword" value="" size="35" dir="ltr"></td>
</tr>

</table></p>
<p><input type="submit" value="Logon to System" class="FormButton"></p>
</form>
<p><font class="ErrorFontSize"><font color="#ff0000"><b>Error: Invalid login to the system, please retry.</b></font></font><script language="JavaScript">
  ErrorRaised = true;
  function RaiseError( ) {
    window.alert( 'Error: Invalid login to the system, please retry.' );
  }
</script>
</p>
<br><br><br>
<p><table width="300" border="0" cellpadding="0" cellspacing="0">

<tr>
<td><a href="http://www.microsoft.com/ie/"><img src="http://www.maratsafin.com/Images/Admin/ie-logo.gif" border="0" width="73" height="67" alt="Press to download latest version of Microsoft Internet Explorer"></a></td>
<td>&nbsp;&nbsp;&nbsp;</td>
<td><font class="LoFontSize">To get the maximum of this system, we recommend using Microsoft Internet Explorer version <font face="Georgia">5.0</font> and earlier. <a href="http://www.microsoft.com/ie/" target="_blank">Press here</a> to download.</font></td>
</tr>

</table></p>
<script language="JavaScript"><!--
  document.LoginForm.formUsername.focus();
// --></script>

</td>
</tr>

<tr>
<td><img src="http://www.maratsafin.com/Images/Admin/space.gif" border="0" width="1" height="10"></td>
</tr>

</table></td>
<td width="10"><img src="http://www.maratsafin.com/Images/Admin/space.gif" border="0" width="10" height="1"></td>
</tr>

<tr>
<td width="100%" bgcolor="#6c78b5" colspan="4"><img src="http://www.maratsafin.com/Images/Admin/space.gif" border="0" width="1" height="1"></td>
</tr>

</table>
<!-- Working area: End -->

<!-- Copyright bar: Start -->
<table width="100%" border="0" cellpadding="5" cellspacing="0">

<tr valign="top">
<td><font class="TinyFontSize">Copyright &copy; Israeline Ltd, 2007, all rights reserved.<br>In case of a problem, please call technical support at <span dir="ltr"><b>03-5631330</b></span> for assistance.</font></td>
<td align="right" width="120"><a href="http://www.israeline.com/" target="_blank"></a></td>
</tr>

</table>
<!-- Copyright bar: End -->

</body>

</html>