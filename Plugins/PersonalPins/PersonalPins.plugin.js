//META{"name":"PersonalPins"}*//

class PersonalPins {
	initConstructor () {
		this.labels = {};
		
		this.messageContextEntryMarkup =
			`<div class="${BDFDB.disCN.contextmenuitemgroup}">
				<div class="${BDFDB.disCN.contextmenuitem} personalpin-item">
					<span>REPLACE_context_noteoption_text</span>
					<div class="${BDFDB.disCN.contextmenuhint}"></div>
				</div>
			</div>`;
		
		this.notesButton =
			`<svg class="${BDFDB.disCNS.channelheadericoninactive + BDFDB.disCNS.channelheadericon + BDFDB.disCN.channelheadericonmargin} notesButton" name="Note" width="16" height="16" viewBox="0 0 26 26">
				<g fill="none" fill-rule="evenodd" transform="translate(3,2)">
					<path class="${BDFDB.disCN.channelheadericonforeground}" fill="currentColor" d="M 4.618, 0 c -0.316, 0 -0.573, 0.256 -0.573, 0.573 v 1.145 c 0, 0.316, 0.256, 0.573, 0.573, 0.573 s 0.573 -0.256, 0.573 -0.573 V 0.573 C 5.191, 0.256, 4.935, 0, 4.618, 0 z"/>
					<path class="${BDFDB.disCN.channelheadericonforeground}" fill="currentColor" d="M 8.053, 0 c -0.316, 0 -0.573, 0.256 -0.573, 0.573 v 1.145 c 0, 0.316, 0.256, 0.573, 0.573, 0.573 s 0.573 -0.256, 0.573 -0.573 V 0.573 C 8.626, 0.256, 8.37, 0, 8.053, 0 z"/>
					<path class="${BDFDB.disCN.channelheadericonforeground}" fill="currentColor" d="M 11.489, 0 c -0.316, 0 -0.573, 0.256 -0.573, 0.573 v 1.145 c 0, 0.316, 0.256, 0.573, 0.573, 0.573 c 0.316, 0, 0.573 -0.256, 0.573 -0.573 V 0.573 C 12.061, 0.256, 11.805, 0, 11.489, 0 z "/>
					<path class="${BDFDB.disCN.channelheadericonforeground}" fill="currentColor" d="M 14.924, 0 c -0.316, 0 -0.573, 0.256 -0.573, 0.573 v 1.145 c 0, 0.316, 0.256, 0.573, 0.573, 0.573 c 0.316, 0, 0.573 -0.256, 0.573 -0.573 V 0.573 C 15.496, 0.256, 15.24, 0, 14.924, 0 z"/>
					<path class="${BDFDB.disCN.channelheadericonforeground}" fill="currentColor" d="M 16.641, 1.25 V 1.718 c 0, 0.947 -0.77, 1.718 -1.718, 1.718 c -0.947, 0 -1.718 -0.77 -1.718 -1.718 c 0, 0.947 -0.77, 1.718 -1.718, 1.718 c -0.947, 0 -1.718 -0.77 -1.718 -1.718 c 0, 0.947 -0.77, 1.718 -1.718, 1.718 c -0.947, 0 -1.718 -0.77 -1.718 -1.718 c 0, 0.947 -0.77, 1.718 -1.718, 1.718 c -0.947, 0 -1.718 -0.77 -1.718 -1.718 V 1.25 C 2.236, 1.488, 1.756, 2.117, 1.756, 2.863 v 14.962 c 0, 0.947, 0.77, 1.718, 1.718, 1.718 h 12.595 c 0.947, 0, 1.718 -0.77, 1.718 -1.718 V 2.863 C 17.786, 2.117, 17.306, 1.488, 16.641, 1.25 z M 14.924, 16.679 H 4.618 c -0.316, 0 -0.573 -0.256 -0.573 -0.573 c 0 -0.316, 0.256 -0.573, 0.573 -0.573 h 10.305 c 0.316, 0, 0.573, 0.256, 0.573, 0.573 C 15.496, 16.423, 15.24, 16.679, 14.924, 16.679 z M 14.924, 13.244 H 4.618 c -0.316, 0 -0.573 -0.256 -0.573 -0.573 c 0 -0.316, 0.256 -0.573, 0.573 -0.573 h 10.305 c 0.316, 0, 0.573, 0.256, 0.573, 0.573 C 15.496, 12.988, 15.24, 13.244, 14.924, 13.244 z M 14.924, 9.733 H 4.618 c -0.316, 0 -0.573 -0.256 -0.573 -0.573 s 0.256 -0.573, 0.573 -0.573 h 10.305 c 0.316, 0, 0.573, 0.256, 0.573, 0.573 S 15.24, 9.733, 14.924, 9.733 z M 14.924, 6.298 H 4.618 c -0.316, 0 -0.573 -0.256 -0.573 -0.573 s 0.256 -0.573, 0.573 -0.573 h 10.305 c 0.316, 0, 0.573, 0.256, 0.573, 0.573 S 15.24, 6.298, 14.924, 6.298 z"/>
				</g>
			</svg>`;
			
		this.notesPopoutMarkup = 
			`<div class="${BDFDB.disCNS.popout + BDFDB.disCNS.popoutbottomright + BDFDB.disCNS.popoutnoarrow + BDFDB.disCN.popoutnoshadow} popout-personalpins-notes DevilBro-modal" style="z-index: 1000; visibility: visible; left: 544.844px; top: 35.9896px; transform: translateX(-100%) translateY(0%) translateZ(0px);">
				<div class="${BDFDB.disCNS.messagespopoutwrap + BDFDB.disCNS.recentmentionspopout + BDFDB.disCN.popoutthemedpopout}" style="max-height: 740px; width: 500px;">
					<div class="${BDFDB.disCNS.recentmentionsheader + BDFDB.disCNS.recentmentionsheader2 + BDFDB.disCN.messagespopoutheader}" style="padding-bottom: 0;">
						<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.margintop8}" style="flex: 0 0 auto;">
							<div class="${BDFDB.disCNS.recentmentionstitle + BDFDB.disCN.messagespopouttitle}">REPLACE_popout_note_text</div>
							<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.alignstretch + BDFDB.disCNS.nowrap + BDFDB.disCNS.searchbar + BDFDB.disCN.size14}" style="flex: 1 1 auto;">
								<input class="${BDFDB.disCNS.searchbarinput + BDFDB.disCN.flexchild}" value="" placeholder="Search for ..." style="flex: 1 1 auto;">
								<div class="${BDFDB.disCNS.searchbariconwrap + BDFDB.disCN.flexchild}">
									<i class="${BDFDB.disCNS.searchbaricon + BDFDB.disCNS.searchbareyeglass + BDFDB.disCN.searchbarvisible}"/>
									<i class="${BDFDB.disCNS.searchbaricon + BDFDB.disCN.searchbarclear}"/>
								</div>
							</div>
						</div>
						<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.margintop8}" style="flex: 0 0 auto;">
							<div tab="channel" class="tab">REPLACE_popout_channel_text</div>
							<div tab="server" class="tab">REPLACE_popout_server_text</div>
							<div tab="allservers" class="tab">REPLACE_popout_allservers_text</div>
							<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.quickselect}" style="padding-bottom: 15px; float:right;">
								<div class="${BDFDB.disCN.quickselectlabel}">REPLACE_popout_sort_text:</div>
								<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.quickselectclick}" style="flex: 0 0 auto;">
									<div option="timestamp" class="${BDFDB.disCN.quickselectvalue}">REPLACE_popout_messagesort_text</div>
									<div class="${BDFDB.disCN.quickselectarrow}"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="${BDFDB.disCN.scrollerwrap}">
						<div class="${BDFDB.disCNS.messagespopout + BDFDB.disCN.scroller}">
							<div class="${BDFDB.disCN.messagespopoutemptyplaceholder}">
								<div class="${BDFDB.disCN.messagespopoutimage}" style="background-image: url(/assets/6793e022dc1b065b21f12d6df02f91bd.svg);"></div>
								<div class="${BDFDB.disCN.messagespopoutbody}"></div>
							</div>
						</div>
					</div>
				</div>
			</div>`;
			
		this.sortPopoutMarkup =
			`<div class="${BDFDB.disCNS.popout + BDFDB.disCNS.popoutbottomright + BDFDB.disCN.popoutnoshadow} personalpins-sort-popout" style="z-index: 1100; visibility: visible; transform: translateX(-100%) translateY(0%) translateZ(0px);">
				<div>
					<div class="${BDFDB.disCN.contextmenu} quickSelectPopout">
						<div class="${BDFDB.disCN.contextmenuitemgroup}">
							<div option="timestamp" class="${BDFDB.disCN.contextmenuitem}">REPLACE_popout_messagesort_text</div>
							<div option="addedat" class="${BDFDB.disCN.contextmenuitem}">REPLACE_popout_datesort_text</div>
						</div>
					</div>
				</div>
			</div>`;
		
		this.optionButtonMarkup = 
			`<div class="${BDFDB.disCN.optionpopoutbutton} btn-personalpins"></div>`;
		
		this.optionsPopoutMarkup = 
			`<div class="${BDFDB.disCNS.popout + BDFDB.disCNS.popoutbottom + BDFDB.disCN.popoutnoarrow} popout-personalpins-options" style="z-index: 1000; visibility: visible;">
				<div class="${BDFDB.disCN.optionpopout + BDFDB.disCN.optionpopoutsmallbox}"></div
			</div>`;
			
		this.popoutEntryMarkup = 
			`<div class="${BDFDB.disCN.optionpopoutitem} btn-item-personalpins">REPLACE_popout_noteoption_text</div>`;
			
		this.messageMarkup = 
			`<div class="${BDFDB.disCNS.messagegroup + BDFDB.disCN.messagehideoverflow}">
				<div class="${BDFDB.disCN.avatarlargeold}"></div>
				<div class="${BDFDB.disCN.messagecomment}">
					<div class="${BDFDB.disCNS.message + BDFDB.disCN.messagefirst}">
						<div class="${BDFDB.disCN.messagebody}">
							<h2 class="${BDFDB.disCN.h2old}">
								<span class="${BDFDB.disCN.messageusernamewrapper}"><strong class="${BDFDB.disCN.messageusername}"></strong></span>
								<span class="${BDFDB.disCN.messagehighlightseparator}"> - </span>
								<span class="${BDFDB.disCN.messagetimestamp}"></span>
							</h2>
							<div class="${BDFDB.disCN.messagetext}">
								<div class="${BDFDB.disCN.messagemarkup}" style="width: 380px;"></div>
							</div>
						</div>
						<div class="${BDFDB.disCN.messageaccessory}"></div>
						<div class="${BDFDB.disCNS.description + BDFDB.disCNS.formtext + BDFDB.disCNS.note + BDFDB.disCNS.margintop4 + BDFDB.disCNS.modedefault + BDFDB.disCN.primary} server-channel"></div>
					</div>
				</div>
				<div class="${BDFDB.disCNS.sinkinteractions + BDFDB.disCN.clickable}"></div>
				<div class="${BDFDB.disCN.messagespopoutactionbuttons}">
					<div class="${BDFDB.disCN.messagespopoutjumpbutton} jump"><div class="${BDFDB.disCN.messagespopouttext}">REPLACE_popout_jump_text</div></div>
					<div class="${BDFDB.disCN.messagespopoutjumpbutton} copy"><div class="${BDFDB.disCN.messagespopouttext}">REPLACE_popout_copy_text</div></div>
					<div class="${BDFDB.disCN.messagespopoutclosebutton}"></div>
				</div>
			</div>`;
	}

	getName () {return "PersonalPins";}

	getDescription () {return "Similar to normal pins. Lets you save messages as notes for yourself.";}

	getVersion () {return "1.5.6";}

	getAuthor () {return "DevilBro";}
	
	getSettingsPanel () {
		if (!this.started || typeof BDFDB !== "object") return;
		var settingshtml = `<div class="${this.getName()}-settings DevilBro-settings"><div class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.title + BDFDB.disCNS.size18 + BDFDB.disCNS.height24 + BDFDB.disCNS.weightnormal + BDFDB.disCN.marginbottom8}">${this.getName()}</div><div class="DevilBro-settings-inner">`;
		settingshtml += `<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 0 0 auto;"><h3 class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.title + BDFDB.disCNS.marginreset + BDFDB.disCNS.weightmedium + BDFDB.disCNS.size16 + BDFDB.disCNS.height24 + BDFDB.disCN.flexchild}" style="flex: 1 1 auto;">Delete all Notes.</h3><button type="button" class="${BDFDB.disCNS.flexchild + BDFDB.disCNS.button + BDFDB.disCNS.buttonlookfilled + BDFDB.disCNS.buttoncolorred + BDFDB.disCNS.buttonsizemedium + BDFDB.disCN.buttongrow} reset-button" style="flex: 0 0 auto;"><div class="${BDFDB.disCN.buttoncontents}">Reset</div></button></div>`;
		settingshtml += `</div></div>`;
		
		var settingspanel = $(settingshtml)[0];

		BDFDB.initElements(settingspanel);

		$(settingspanel)
			.on("click", ".reset-button", () => {this.resetAll();});
		return settingspanel;
	}

	//legacy
	load () {}

	start () {
		var libraryScript = null;
		if (typeof BDFDB !== "object" || typeof BDFDB.isLibraryOutdated !== "function" || BDFDB.isLibraryOutdated()) {
			libraryScript = document.querySelector('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js"]');
			if (libraryScript) libraryScript.remove();
			libraryScript = document.createElement("script");
			libraryScript.setAttribute("type", "text/javascript");
			libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js");
			document.head.appendChild(libraryScript);
		}
		this.startTimeout = setTimeout(() => {this.initialize();}, 30000);
		if (typeof BDFDB === "object" && typeof BDFDB.isLibraryOutdated === "function") this.initialize();
		else libraryScript.addEventListener("load", () => {this.initialize();});
	}

	initialize () {
		if (typeof BDFDB === "object") {
			BDFDB.loadMessage(this); 
			
			this.GuildStore = BDFDB.WebModules.findByProperties(["getGuild"]);
			this.ChannelStore = BDFDB.WebModules.findByProperties(["getChannel"]);
			this.UserStore = BDFDB.WebModules.findByProperties(["getUser"]);
			this.MemberStore = BDFDB.WebModules.findByProperties(["getMember"]);
			this.IconUtils = BDFDB.WebModules.findByProperties(["getUserAvatarURL"]);
			this.HistoryUtils = BDFDB.WebModules.findByProperties(["transitionTo", "replaceWith", "getHistory"]);
			this.MainDiscord = BDFDB.WebModules.findByProperties(["ActionTypes"]);
			
			var observer = null;

			observer = new MutationObserver((changes, _) => {
				changes.forEach(
					(change, i) => {
						if (change.addedNodes) {
							change.addedNodes.forEach((node) => {
								if (node.nodeType == 1 && node.className.includes(BDFDB.disCN.contextmenu)) {
									this.onContextMenu(node);
								}
							});
						}
					}
				);
			});
			BDFDB.addObserver(this, BDFDB.dotCN.appmount, {name:"messageContextObserver",instance:observer}, {childList: true});
			
			observer = new MutationObserver((changes, _) => {
				changes.forEach(
					(change, i) => {
						if (change.addedNodes) {
							change.addedNodes.forEach((node) => {
								if (node && node.tagName && node.classList && node.classList.contains(BDFDB.disCN.messagegroup)) {
									node.querySelectorAll(BDFDB.dotCN.message).forEach(message => {this.addOptionButton(message);});
								}
								else if (node && node.tagName && node.classList && node.classList.contains(BDFDB.disCN.message)) {
									this.addOptionButton(node);
								}
							});
						}
					}
				);
			});
			BDFDB.addObserver(this, BDFDB.dotCN.messages, {name:"chatWindowObserver",instance:observer}, {childList:true, subtree:true});
			
			observer = new MutationObserver((changes, _) => {
				changes.forEach(
					(change, i) => {
						if (change.addedNodes) {
							change.addedNodes.forEach((node) => {
								if (node && node.tagName && node.querySelector(BDFDB.dotCN.optionpopout) && !node.querySelector(".btn-item-personalpins")) {
									$(node).find(BDFDB.dotCN.optionpopout).append(this.popoutEntryMarkup);
									this.addClickListener(node);
								}
							});
						}
					}
				);
			});
			BDFDB.addObserver(this, BDFDB.dotCN.popouts, {name:"optionPopoutObserver",instance:observer}, {childList: true});
			
			$(document).off("click." + this.getName(), BDFDB.dotCN.optionpopoutbutton).off("contextmenu." + this.getName(), BDFDB.dotCN.message)
				.on("click." + this.getName(), BDFDB.dotCN.optionpopoutbutton, (e) => {
					this.getMessageData($(BDFDB.dotCN.message).has(e.currentTarget)[0]);
				})
				.on("contextmenu." + this.getName(), BDFDB.dotCN.message, (e) => {
					this.getMessageData(e.currentTarget);
				});
			
			document.querySelectorAll(BDFDB.dotCNS.messagegroup + BDFDB.dotCN.message).forEach(message => {this.addOptionButton(message);});
			
			this.addNotesButton();
		}
		else {
			console.error(this.getName() + ": Fatal Error: Could not load BD functions!");
		}
	}


	stop () {
		if (typeof BDFDB === "object") {
			$(document).off("click." + this.getName(), BDFDB.dotCN.optionpopoutbutton).off("contextmenu." + this.getName(), BDFDB.dotCN.message);
			
			$(".btn-personalpins, .notesButton").remove();
			
			BDFDB.unloadMessage(this);
		}
	}
	
	onSwitch () {
		if (typeof BDFDB === "object") {
			BDFDB.addObserver(this, BDFDB.dotCN.messages, {name:"chatWindowObserver"}, {childList:true, subtree:true});
			document.querySelectorAll(BDFDB.dotCNS.messages + BDFDB.dotCN.message).forEach(message => {this.addOptionButton(message);});
			setTimeout(() => {
				this.addNotesButton();
			},1);
		}
	}

	
	// begin of own functions

	resetAll () {
		if (confirm("Are you sure you want to delete all pinned notes?")) {
			BDFDB.removeAllData(this, "pins");
		}
	}
	
	changeLanguageStrings () {
		this.messageContextEntryMarkup = 	this.messageContextEntryMarkup.replace("REPLACE_context_noteoption_text", this.labels.context_noteoption_text);
		
		this.notesPopoutMarkup = 			this.notesPopoutMarkup.replace("REPLACE_popout_note_text", this.labels.popout_note_text);
		this.notesPopoutMarkup = 			this.notesPopoutMarkup.replace("REPLACE_popout_channel_text", this.labels.popout_channel_text);
		this.notesPopoutMarkup = 			this.notesPopoutMarkup.replace("REPLACE_popout_server_text", this.labels.popout_server_text);
		this.notesPopoutMarkup = 			this.notesPopoutMarkup.replace("REPLACE_popout_allservers_text", this.labels.popout_allservers_text);
		this.notesPopoutMarkup = 			this.notesPopoutMarkup.replace("REPLACE_popout_sort_text", this.labels.popout_sort_text);
		this.notesPopoutMarkup = 			this.notesPopoutMarkup.replace("REPLACE_popout_messagesort_text", this.labels.popout_messagesort_text);
		
		this.messageMarkup = 				this.messageMarkup.replace("REPLACE_popout_jump_text", this.labels.popout_jump_text);
		this.messageMarkup = 				this.messageMarkup.replace("REPLACE_popout_copy_text", this.labels.popout_copy_text);
		
		this.sortPopoutMarkup = 			this.sortPopoutMarkup.replace("REPLACE_popout_messagesort_text", this.labels.popout_messagesort_text);
		this.sortPopoutMarkup = 			this.sortPopoutMarkup.replace("REPLACE_popout_datesort_text", this.labels.popout_datesort_text);
		
		this.popoutEntryMarkup = 			this.popoutEntryMarkup.replace("REPLACE_popout_noteoption_text", this.labels.popout_noteoption_text);
	}
	
	onContextMenu (context) {
		if (!context || !context.tagName || !context.parentElement || context.querySelector(".personalpin-item")) return;
		for (let group of context.querySelectorAll(BDFDB.dotCN.contextmenuitemgroup)) {
			if (BDFDB.getKeyInformation({"node":group, "key":"displayName", "value":"MessagePinItem"})) {
				$(this.messageContextEntryMarkup).insertAfter(group)
					.on("click", ".personalpin-item", () => {
						$(context).hide();
						this.addMessageToNotes();
					});
				
				BDFDB.updateContextPosition(context);
				break;
			}
		}
	}
	
	getMessageData (div) {
		if (div && !div.querySelector(BDFDB.dotCN.messagesystem)) {
			var messagegroup = $(BDFDB.dotCN.messagegroup).has(div);
			var pos = messagegroup.find(BDFDB.dotCN.message).index(div);
			if (messagegroup[0] && pos > -1) {
				var info = BDFDB.getKeyInformation({"node":div,"key":"messages","up":true,"time":1000});
				if (info) this.message = Object.assign({},info[pos],{"div":div, "group":messagegroup[0], "pos":pos});
			}
		}
		else {
			this.message = null;
		}
	}
	
	addNotesButton () {
		$(".notesButton").remove();
		$(this.notesButton)
			.insertBefore($(BDFDB.dotCN.channelheadericoninactive).parent().find(BDFDB.dotCN.channelheadersearch))
			.on("click." + this.getName(), (e) => {
				this.openNotesPopout(e);
			})
			.on("mouseenter." + this.getName(), (e) => {
				BDFDB.createTooltip(this.labels.popout_note_text, e.currentTarget, {type:"bottom",selector:"note-button-tooltip"});
			});
	}
	
	addOptionButton (message) {
		if (!message.querySelector(BDFDB.dotCN.optionpopoutbutton) && !message.querySelector(BDFDB.dotCN.messagesystem) && !message.querySelector(BDFDB.dotCN.messageuploadcancel)) {
			$(this.optionButtonMarkup).insertBefore(message.querySelector(BDFDB.dotCN.messagetext).firstChild);
			$(message).off("click." + this.getName()).on("click." + this.getName(), ".btn-personalpins", (e) => {
				this.openOptionPopout(e);
			});
		}
	}
	
	openNotesPopout (e) {
		var wrapper = e.currentTarget;
		if (wrapper.classList.contains("popout-open")) return;
		wrapper.classList.add("popout-open");
		var popout = $(this.notesPopoutMarkup);
		BDFDB.initElements(popout);
		var wrappersize = wrapper.getBoundingClientRect(); 
		popout
			.appendTo(BDFDB.dotCN.popouts)
			.css("left", wrappersize.width/2 + wrappersize.left + "px")
			.css("top", wrappersize.height + wrappersize.top + "px")
			.on("click", ".tab", () => {
				this.addNotes(popout[0]);
			})
			.on("keyup." + this.getName(), BDFDB.dotCN.searchbarinput, () => {
				clearTimeout(popout.searchTimeout);
				popout.searchTimeout = setTimeout(() => {this.addNotes(popout[0]);},1000);
			})
			.on("click." + this.getName(), BDFDB.dotCN.searchbarclear + BDFDB.dotCN.searchbarvisible, () => {
				clearTimeout(popout.searchTimeout);
				popout.searchTimeout = setTimeout(() => {this.addNotes(popout[0]);},1000);
			})
			.on("click", BDFDB.dotCN.quickselectclick, (e2) => {
				this.openSortPopout(e2, popout[0]);
			});
			
		$(document).on("mousedown.notepopout" + this.getName(), (e2) => {
			if (popout.has(e2.target).length == 0 && $(".personalpins-sort-popout").has(e2.target).length == 0) {
				$(document).off("mousedown.notepopout" + this.getName());
				popout.remove();
				setTimeout(() => {wrapper.classList.remove("popout-open");},300);
			}
		});
		
		this.addNotes(popout[0]);
	}
	
	openSortPopout (e, notespopout) {
		var wrapper = e.currentTarget;
		if (wrapper.classList.contains("popout-open")) return;
		wrapper.classList.add("popout-open");
		var value = $(wrapper).find(BDFDB.dotCN.quickselectvalue);
		var popout = $(this.sortPopoutMarkup);
		$(BDFDB.dotCN.popouts).append(popout)
			.off("click", BDFDB.dotCN.contextmenuitem)
			.on("click", BDFDB.dotCN.contextmenuitem, (e2) => {
				value.text($(e2.currentTarget).text());
				value.attr("option", $(e2.currentTarget).attr("option"));
				$(document).off("mousedown.sortpopout" + this.getName());
				popout.remove();
				setTimeout(() => {wrapper.classList.remove("popout-open");},300);
				this.addNotes(notespopout);
			});
			
		popout
			.css("left", $(e.currentTarget).offset().left + $(e.currentTarget).outerWidth() + "px")
			.css("top", $(e.currentTarget).offset().top + value.outerHeight() + "px")
			.find(BDFDB.dotCN.contextmenu).addClass(BDFDB.getDiscordTheme());
			
		$(document).on("mousedown.sortpopout" + this.getName(), (e2) => {
			if (popout.has(e2.target).length == 0) {
				$(document).off("mousedown.sortpopout" + this.getName());
				popout.remove();
				setTimeout(() => {wrapper.classList.remove("popout-open");},300);
			}
		});
	}
	
	openOptionPopout (e) {
		var wrapper = e.currentTarget;
		if (wrapper.classList.contains(BDFDB.disCN.optionpopoutopen)) return;
		wrapper.classList.add(BDFDB.disCN.optionpopoutopen);
		var popout = $(this.optionsPopoutMarkup);
		$(BDFDB.dotCN.popouts).append(popout);
		$(popout).find(BDFDB.dotCN.optionpopout).append(this.popoutEntryMarkup);
		this.addClickListener(popout);
		
		popout
			.css("left", e.pageX - ($(popout).outerWidth() / 2) + "px")
			.css("top", e.pageY + "px");
			
		$(document).on("mousedown.optionpopout" + this.getName(), (e2) => {
			if (popout.has(e2.target).length == 0) {
				$(document).off("mousedown.optionpopout" + this.getName());
				popout.remove();
				setTimeout(() => {wrapper.classList.remove(BDFDB.disCN.optionpopoutopen);},300);
			}
		});
	}
	
	addClickListener (popout) {
		$(popout)
			.off("click." + this.getName(), ".btn-item-personalpins")
			.on("click." + this.getName(), ".btn-item-personalpins", (e) => {
				$(BDFDB.dotCN.popout).has(BDFDB.dotCN.optionpopout).hide();
				this.addMessageToNotes();
				var popoutbutton = document.querySelector(BDFDB.dotCN.optionpopoutbutton + BDFDB.dotCN.optionpopoutopen);
				if (popoutbutton) popoutbutton.classList.remove(BDFDB.disCN.optionpopoutopen);
			});
	}
	
	addMessageToNotes () {
		if (!this.message) return;
		var channelObj = BDFDB.getSelectedChannel();
		var serverObj = BDFDB.getSelectedServer() || {};
		if (this.message && channelObj) {
			var author = this.message.author;
			var channelID = channelObj.id;
			var serverID = serverObj.id ? serverObj.id : "@me";
			var pins = BDFDB.loadAllData(this, "pins");
			pins[serverID] = pins[serverID] ? pins[serverID] : {}
			pins[serverID][channelID] = pins[serverID][channelID] ? pins[serverID][channelID] : {}
			var messageID = this.message.id;
			var position = this.message.pos;
			var channelname = channelObj.name;
			if (!channelname && channelObj.recipients.length > 0) {
				for (let dmmemberID of channelObj.recipients) {
					channelname = channelname ? channelname + ", @" : channelname;
					channelname = channelname + this.UserStore.getUser(dmmemberID).username;
				}
			}
			var markup = this.message.div.querySelector(BDFDB.dotCN.messagecontent) || this.message.div.querySelector(BDFDB.dotCN.messagemarkup);
			var message = {
				"serverID": serverID,
				"serverName": serverObj.name ? serverObj.name : "Direct Messages",
				"channelID": channelID,
				"channelName": channelname,
				"id": messageID,
				"pos": position,
				"timestamp": this.message.timestamp._i.getTime(),
				"addedat": new Date().getTime(),
				"color": this.message.colorString,
				"authorID": author.id,
				"authorName": author.username,
				"avatar": this.IconUtils.getUserAvatarURL(author),
				"content": this.message.content,
				"markup": markup.innerHTML,
				"accessory": this.message.div.querySelector(BDFDB.dotCN.messageaccessory).innerHTML
			};
			pins[serverID][channelID][messageID + "_" + position] = message;
			BDFDB.saveAllData(pins, this, "pins");
			BDFDB.showToast(this.labels.toast_noteadd_text, {type:"success"});
		}
		this.message = null;
	}
	
	addNotes (notespopout) {
		notespopout.querySelectorAll(BDFDB.dotCN.messagegroup).forEach(message => {message.remove();});
		var channelObj = BDFDB.getSelectedChannel();
		if (channelObj) {
			var serverID = channelObj.guild_id ? channelObj.guild_id : "@me";
			var channelID = channelObj.id;
			var pins = BDFDB.loadAllData(this, "pins");
			if (!BDFDB.isObjectEmpty(pins)) {
				var language = BDFDB.getDiscordLanguage().id;
				var container = notespopout.querySelector(BDFDB.dotCN.messagespopout);
				var placeholder = notespopout.querySelector(BDFDB.dotCN.messagespopoutemptyplaceholder);
				var messages = {};
				switch (notespopout.querySelector(".tab.selected").getAttribute("tab")) {
					case "channel":
						messages = pins[serverID] && pins[serverID][channelID] ? pins[serverID][channelID] : {};
						break;
					case "server":
						if (pins[serverID]) for (let channel in pins[serverID]) messages = Object.assign(messages, pins[serverID][channel]); 
						break;
					case "allservers":
						for (let server in pins) if (pins[server]) for (let channel in pins[server]) messages = Object.assign(messages, pins[server][channel]); 
						break;
				}
				var messageArray = [];
				for (var id in messages) {
					messageArray.push(messages[id]);
				}
				BDFDB.sortArrayByKey(messageArray, notespopout.querySelector(BDFDB.dotCN.quickselectvalue).getAttribute("option"));
				for (let messageData of messageArray) {
					let message = $(this.messageMarkup)[0];
					let server = this.GuildStore.getGuild(messageData.serverID);
					let channel = this.ChannelStore.getChannel(messageData.channelID);
					let user = this.UserStore.getUser(messageData.authorID);
					let member = this.MemberStore.getMember(messageData.serverID, messageData.authorID);
					let date = new Date(messageData.timestamp);
					container.insertBefore(message, container.firstChild);
					message.querySelector(BDFDB.dotCN.avatarlargeold).style.backgroundImage = 
						user ? "url(" + this.IconUtils.getUserAvatarURL(user) + ")" : "url(" + messageData.avatar + ")";
					message.querySelector(BDFDB.dotCN.messageusername).innerText = user ? user.username : messageData.authorName;
					message.querySelector(BDFDB.dotCN.messageusername).style.color = member ? member.colorString : messageData.color;
					message.querySelector(BDFDB.dotCN.messagetimestamp).innerText = date.toLocaleString(language);
					message.querySelector(".server-channel").innerText = 
						(server && server.name ? server.name : messageData.serverName) + 
						(messageData.serverID == "@me" ? " @" : " #") + 
						(channel && channel.name ? channel.name : messageData.channelName);
					message.querySelector(BDFDB.dotCN.messagemarkup).innerHTML = messageData.markup;
					message.querySelector(BDFDB.dotCN.messageaccessory).innerHTML = messageData.accessory;
					$(message).on("click." + this.getName(), BDFDB.dotCN.messagespopoutclosebutton, (e) => {
						message.remove();
						delete pins[messageData.serverID][messageData.channelID][messageData.id + "_" + messageData.pos];
						BDFDB.saveAllData(pins, this, "pins");
						if (!container.querySelector(BDFDB.dotCN.messagegroup)) $(placeholder).show();
						BDFDB.showToast(this.labels.toast_noteremove_text, {type:"danger"});
					})
					.on("click." + this.getName(), BDFDB.dotCN.messagespopoutjumpbutton + ".jump", (e) => {
						this.HistoryUtils.transitionTo(this.MainDiscord.Routes.MESSAGE(messageData.serverID, messageData.channelID, messageData.id));
					})
					.on("click." + this.getName(), BDFDB.dotCN.messagespopoutjumpbutton + ".copy", (e) => {
						let clipboard = require("electron").clipboard;
						if (messageData.content) clipboard.write({text: messageData.content});
						else {
							var image = message.querySelector(BDFDB.dotCNS.imagewrapper + "img");
							if (image) {
								// stolen from Image2Clipboard
								require("request")({url: image.src, encoding: null}, (error, response, buffer) => {
									if (buffer) {
										var platform = require("process").platform;
										if (platform === "win32" || platform === "darwin") {
											clipboard.write({image: require("electron").nativeImage.createFromBuffer(buffer)});
										}
										else {
											var file = require("path").join(require("process").env["HOME"], "personalpinstemp.png");
											require("fs").writeFileSync(file, buffer, {encoding: null});
											clipboard.write({image: file});
											require("fs").unlinkSync(file);
										}
									}
								});
							}
						}
					});
				}
				var searchstring = notespopout.querySelector(BDFDB.dotCN.searchbarinput).value.replace(/[<|>]/g, "");
				if (searchstring) for (let note of notespopout.querySelectorAll(BDFDB.dotCN.messagegroup)) {
					note.innerHTML = BDFDB.highlightText(note.innerHTML, searchstring);
					if (!note.querySelector(BDFDB.dotCN.highlight)) note.remove();
				}
				$(placeholder).toggle(notespopout.querySelectorAll(BDFDB.dotCN.messagegroup).length == 0);
			}
		}
	}
	
	setLabelsByLanguage () {
		switch (BDFDB.getDiscordLanguage().id) {
			case "hr":		//croatian
				return {
					popout_note_text:				"Bilješke",
					popout_channel_text:			"Kanal",
					popout_server_text:				"Poslužavnik",
					popout_allservers_text:			"Svi poslužitelji",
					popout_sort_text:				"Poredaj po",
					popout_messagesort_text:		"Vijesti-Datum",
					popout_datesort_text:			"Bilješka-Datum",
					popout_jump_text:				"Skok",
					popout_copy_text:				"Kopija",
					context_noteoption_text:		"Napominjemo poruku",
					popout_noteoption_text:			"Bilješka",
					toast_noteadd_text:				"Poruka dodana u bilježnicu.",
					toast_noteremove_text:			"Poruka uklonjena iz bilježnice."
				};
			case "da":		//danish
				return {
					popout_note_text:				"Noter",
					popout_channel_text:			"Kanal",
					popout_server_text:				"Server",
					popout_allservers_text:			"Alle servere",
					popout_sort_text:				"Sorter efter",
					popout_messagesort_text:		"Meddelelse-Dato",
					popout_datesort_text:			"Note-Dato",
					popout_jump_text:				"Hop",
					popout_copy_text:				"Kopi",
					context_noteoption_text:		"Noter Meddelelse",
					popout_noteoption_text:			"Noter",
					toast_noteadd_text:				"Meddelelse tilføjet til notesbog.",
					toast_noteremove_text:			"Meddelelse fjernet fra notesbog."
				};
			case "de":		//german
				return {
					popout_note_text:				"Notizen",
					popout_channel_text:			"Kanal",
					popout_server_text:				"Server",
					popout_allservers_text:			"Alle Server",
					popout_sort_text:				"Sortieren nach",
					popout_messagesort_text:		"Nachrichten-Datum",
					popout_datesort_text:			"Notiz-Datum",
					popout_jump_text:				"Springen",
					popout_copy_text:				"Kopieren",
					context_noteoption_text:		"Nachricht notieren",
					popout_noteoption_text:			"Notieren",
					toast_noteadd_text:				"Nachricht zum Notizbuch hinzugefügt.",
					toast_noteremove_text:			"Nachricht aus dem Notizbuch entfernt."
				};
			case "es":		//spanish
				return {
					popout_note_text:				"Notas",
					popout_channel_text:			"Canal",
					popout_server_text:				"Servidor",
					popout_allservers_text:			"Todos los servidores",
					popout_sort_text:				"Ordenar por",
					popout_messagesort_text:		"Mensaje-Fecha",
					popout_datesort_text:			"Nota-Fecha",
					popout_jump_text:				"Ir a",
					popout_copy_text:				"Copiar",
					context_noteoption_text:		"Anotar mensaje",
					popout_noteoption_text:			"Anotar",
					toast_noteadd_text:				"Mensaje agregado al cuaderno.",
					toast_noteremove_text:			"Mensaje eliminado del cuaderno."
				};
			case "fr":		//french
				return {
					popout_note_text:				"Notes",
					popout_channel_text:			"Canal",
					popout_server_text:				"Serveur",
					popout_allservers_text:			"Tous les serveurs",
					popout_sort_text:				"Trier par",
					popout_messagesort_text:		"Message-Date",
					popout_datesort_text:			"Note-Date",
					popout_jump_text:				"Accéder",
					popout_copy_text:				"Copier",
					context_noteoption_text:		"Noter le message",
					popout_noteoption_text:			"Noter",
					toast_noteadd_text:				"Message ajouté au bloc-notes.",
					toast_noteremove_text:			"Message supprimé du bloc-notes."
				};
			case "it":		//italian
				return {
					popout_note_text:				"Note",
					popout_channel_text:			"Canale",
					popout_server_text:				"Server",
					popout_allservers_text:			"Tutti i server",
					popout_sort_text:				"Ordina per",
					popout_messagesort_text:		"Messaggio-Data",
					popout_datesort_text:			"Nota-Data",
					popout_jump_text:				"Vai",
					popout_copy_text:				"Copiare",
					context_noteoption_text:		"Annotare il messaggio",
					popout_noteoption_text:			"Annotare",
					toast_noteadd_text:				"Messaggio aggiunto al blocco note.",
					toast_noteremove_text:			"Messaggio rimosso dal blocco note."
				};
			case "nl":		//dutch
				return {
					popout_note_text:				"Notities",
					popout_channel_text:			"Kanaal",
					popout_server_text:				"Server",
					popout_allservers_text:			"Alle servers",
					popout_sort_text:				"Sorteer op",
					popout_messagesort_text:		"Bericht-Datum",
					popout_datesort_text:			"Notitie-Datum",
					popout_jump_text:				"Openen",
					popout_copy_text:				"Kopiëren",
					context_noteoption_text:		"Noteer bericht",
					popout_noteoption_text:			"Noteer",
					toast_noteadd_text:				"Bericht toegevoegd aan notitieblok.",
					toast_noteremove_text:			"Bericht verwijderd van notitieblok."
				};
			case "no":		//norwegian
				return {
					popout_note_text:				"Notatene",
					popout_channel_text:			"Kanal",
					popout_server_text:				"Server",
					popout_allservers_text:			"Alle servere",
					popout_sort_text:				"Sorter etter",
					popout_messagesort_text:		"Melding-Dato",
					popout_datesort_text:			"Merknad-Dato",
					popout_jump_text:				"Hoppe",
					popout_copy_text:				"Kopiere",
					context_noteoption_text:		"Notat ned meldingen",
					popout_noteoption_text:			"Notere",
					toast_noteadd_text:				"Melding lagt til i notisboken.",
					toast_noteremove_text:			"Melding fjernet fra notatboken."
				};
			case "pl":		//polish
				return {
					popout_note_text:				"Notatki",
					popout_channel_text:			"Kanał",
					popout_server_text:				"Serwer",
					popout_allservers_text:			"Wszystkie serwery",
					popout_sort_text:				"Sortuj według",
					popout_messagesort_text:		"Wiadomość-Data",
					popout_datesort_text:			"Notatka-Data",
					popout_jump_text:				"Skocz",
					popout_copy_text:				"Kopiować",
					context_noteoption_text:		"Notuj wiadomość",
					popout_noteoption_text:			"Notuj",
					toast_noteadd_text:				"Wiadomość została dodana do notatnika.",
					toast_noteremove_text:			"Wiadomość została usunięta z notatnika."
				};
			case "pt-BR":	//portuguese (brazil)
				return {
					popout_note_text:				"Notas",
					popout_channel_text:			"Canal",
					popout_server_text:				"Servidor",
					popout_allservers_text:			"Todos os servidores",
					popout_sort_text:				"Ordenar por",
					popout_messagesort_text:		"Mensagem-Data",
					popout_datesort_text:			"Nota-Data",
					popout_jump_text:				"Pular",
					popout_copy_text:				"Copiar",
					context_noteoption_text:		"Anote a mensagem",
					popout_noteoption_text:			"Anotar",
					toast_noteadd_text:				"Mensagem adicionada ao caderno.",
					toast_noteremove_text:			"Mensagem removida do caderno."
				};
			case "fi":		//finnish
				return {
					popout_note_text:				"Muistiinpanot",
					popout_channel_text:			"Kanava",
					popout_server_text:				"Palvelin",
					popout_allservers_text:			"Kaikki palvelimet",
					popout_sort_text:				"Järjestä",
					popout_messagesort_text:		"Viesti-Päivämäärä",
					popout_datesort_text:			"Huomaa-Päivämäärä",
					popout_jump_text:				"Siirry",
					popout_copy_text:				"Kopioida",
					context_noteoption_text:		"Huomaa viesti",
					popout_noteoption_text:			"Huomaa",
					toast_noteadd_text:				"Viesti lisätty muistikirjaan.",
					toast_noteremove_text:			"Viesti poistettiin muistikirjaan."
				};
			case "sv":		//swedish
				return {
					popout_note_text:				"Anteckningarna",
					popout_channel_text:			"Kanal",
					popout_server_text:				"Server",
					popout_allservers_text:			"Alla servrar",
					popout_sort_text:				"Sortera efter",
					popout_messagesort_text:		"Meddelande-Datum",
					popout_datesort_text:			"Anteckningen-Datum",
					popout_jump_text:				"Hoppa",
					popout_copy_text:				"Kopiera",
					context_noteoption_text:		"Anteckna meddelande",
					popout_noteoption_text:			"Anteckna",
					toast_noteadd_text:				"Meddelandet läggs till i anteckningsboken.",
					toast_noteremove_text:			"Meddelande borttaget från anteckningsboken."
				};
			case "tr":		//turkish
				return {
					popout_note_text:				"Notlar",
					popout_channel_text:			"Kanal",
					popout_server_text:				"Sunucu",
					popout_allservers_text:			"Tüm Sunucular",
					popout_sort_text:				"Göre sırala",
					popout_messagesort_text:		"Mesaj-Tarih",
					popout_datesort_text:			"Not-Tarih",
					popout_jump_text:				"Git",
					popout_copy_text:				"Kopyalamak",
					context_noteoption_text:		"Mesajı not alın",
					popout_noteoption_text:			"Not almak",
					toast_noteadd_text:				"Mesaj not defteri'ya eklendi.",
					toast_noteremove_text:			"Mesaj not defteri'dan kaldırıldı."
				};
			case "cs":		//czech
				return {
					popout_note_text:				"Poznámky",
					popout_channel_text:			"Kanál",
					popout_server_text:				"Server",
					popout_allservers_text:			"Všechny servery",
					popout_sort_text:				"Seřazeno podle",
					popout_messagesort_text:		"Zpráva-datum",
					popout_datesort_text:			"Poznámka-datum",
					popout_jump_text:				"Skok",
					popout_copy_text:				"Kopírovat",
					context_noteoption_text:		"Poznámka dolů zprávu",
					popout_noteoption_text:			"Poznámka dolů",
					toast_noteadd_text:				"Zpráva byla přidána do notebooku.",
					toast_noteremove_text:			"Zpráva byla odebrána z notebooku."
				};
			case "bg":		//bulgarian
				return {
					popout_note_text:				"бележките",
					popout_channel_text:			"Канал",
					popout_server_text:				"Сървър",
					popout_allservers_text:			"Всички сървъри",
					popout_sort_text:				"Сортиране по",
					popout_messagesort_text:		"Съобщение-Дата",
					popout_datesort_text:			"Забележка-Дата",
					popout_jump_text:				"Направо",
					popout_copy_text:				"Копирам",
					context_noteoption_text:		"Oтбележете съобщението",
					popout_noteoption_text:			"Oтбележете",
					toast_noteadd_text:				"Съобщението бе добавено към бележника.",
					toast_noteremove_text:			"Съобщението е премахнато от преносимия компютър."
				};
			case "ru":		//russian
				return {
					popout_note_text:				"Заметки",
					popout_channel_text:			"Канал",
					popout_server_text:				"Cервер",
					popout_allservers_text:			"Все серверы",
					popout_sort_text:				"Сортировать по",
					popout_messagesort_text:		"Сообщение-дата",
					popout_datesort_text:			"Заметки-Дата",
					popout_jump_text:				"Перейти",
					popout_copy_text:				"Копировать",
					context_noteoption_text:		"Записывать вниз",
					popout_noteoption_text:			"Записывать",
					toast_noteadd_text:				"Сообщение добавлено в блокнот.",
					toast_noteremove_text:			"Сообщение удалено из записной книжки."
				};
			case "uk":		//ukrainian
				return {
					popout_note_text:				"Замітки",
					popout_channel_text:			"Канал",
					popout_server_text:				"Сервер",
					popout_allservers_text:			"Всі сервери",
					popout_sort_text:				"Сортувати за",
					popout_messagesort_text:		"Повідомлення-дата",
					popout_datesort_text:			"Примітка-дата",
					popout_jump_text:				"Плиг",
					popout_copy_text:				"Копіювати",
					context_noteoption_text:		"Зверніть увагу на повідомлення",
					popout_noteoption_text:			"Занотуйте",
					toast_noteadd_text:				"Повідомлення додається до ноутбука.",
					toast_noteremove_text:			"Повідомлення видалено з ноутбука."
				};
			case "ja":		//japanese
				return {
					popout_note_text:				"ノート",
					popout_channel_text:			"チャネル",
					popout_server_text:				"サーバ",
					popout_allservers_text:			"すべてのサーバー",
					popout_sort_text:				"並び替え",
					popout_messagesort_text:		"メッセージ-日付",
					popout_datesort_text:			"注-日付",
					popout_jump_text:				"ジャンプ",
					popout_copy_text:				"写す",
					context_noteoption_text:		"ノートダウンメッセージ",
					popout_noteoption_text:			"書き留める",
					toast_noteadd_text:				"ノートブックにメッセージが追加されました.",
					toast_noteremove_text:			"ノートブックからメッセージが削除されました."
				};
			case "zh-TW":	//chinese (traditional)
				return {
					popout_note_text:				"筆記",
					popout_channel_text:			"渠道",
					popout_server_text:				"服務器",
					popout_allservers_text:			"所有服務器",
					popout_sort_text:				"排序方式",
					popout_messagesort_text:		"消息-日期",
					popout_datesort_text:			"注-日期",
					popout_jump_text:				"跳到",
					popout_copy_text:				"複製",
					context_noteoption_text:		"記下下來的消息",
					popout_noteoption_text:			"記下",
					toast_noteadd_text:				"消息添加到筆記本.",
					toast_noteremove_text:			"消息從筆記本中刪除."
				};
			case "ko":		//korean
				return {
					popout_note_text:				"노트",
					popout_channel_text:			"채널",
					popout_server_text:				"섬기는 사람",
					popout_allservers_text:			"모든 서버",
					popout_sort_text:				"정렬 기준",
					popout_messagesort_text:		"메시지-날짜",
					popout_datesort_text:			"주-날짜",
					popout_jump_text:				"이동",
					popout_copy_text:				"베끼다",
					context_noteoption_text:		"메모 다운 메시지",
					popout_noteoption_text:			"메모하다",
					toast_noteadd_text:				"노트북에 메시지 추가됨.",
					toast_noteremove_text:			"노트에서 메시지 삭제됨."
				};
			default:		//default: english
				return {
					popout_note_text:				"Notes",
					popout_channel_text:			"Channel",
					popout_server_text:				"Server",
					popout_allservers_text:			"All Servers",
					popout_sort_text:				"Sort by",
					popout_messagesort_text:		"Message-Date",
					popout_datesort_text:			"Note-Date",
					popout_jump_text:				"Jump",
					popout_copy_text:				"Copy",
					context_noteoption_text:		"Note Message",
					popout_noteoption_text:			"Note",
					toast_noteadd_text:				"Message added to notebook.",
					toast_noteremove_text:			"Message removed from notebook."
				};
		}
	}
}