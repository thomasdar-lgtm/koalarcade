package com.koala.arcade;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/** Koalarcade : l'appli web en plein écran. Les jeux se mettent à jour tout seuls depuis le site. */
public class MainActivity extends Activity {
    private static final String HOME = "https://thomasdar-lgtm.github.io/koalarcade/";
    private WebView web;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle saved) {
        super.onCreate(saved);
        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#00071A"));
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setTextZoom(100);
        web.setWebChromeClient(new WebChromeClient()); // boîtes « Recommencer ? » etc.
        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest r) {
                String u = r.getUrl().toString();
                if (u.startsWith(HOME)) return false;
                try { startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(u))); } catch (Exception ignored) { }
                return true;
            }

            @Override
            public void onReceivedError(WebView v, WebResourceRequest r, WebResourceError e) {
                if (!r.isForMainFrame()) return;
                v.loadDataWithBaseURL(HOME,
                    "<html><head><meta name='viewport' content='width=device-width,initial-scale=1'></head>"
                    + "<body style='background:#00071A;color:#fff;font-family:sans-serif;display:flex;flex-direction:column;"
                    + "align-items:center;justify-content:center;height:100vh;margin:0;text-align:center'>"
                    + "<p style='font-size:20px;font-weight:bold'>Pas de connexion</p>"
                    + "<p style='opacity:.7;padding:0 24px'>Il faut internet pour le tout premier lancement. Ensuite, les jeux marchent hors ligne.</p>"
                    + "<a href='" + HOME + "' style='margin-top:16px;background:#f2b705;color:#00071A;padding:14px 28px;"
                    + "border-radius:14px;text-decoration:none;font-weight:bold'>Réessayer</a></body></html>",
                    "text/html", "utf-8", HOME);
            }
        });
        setContentView(web);
        if (saved == null || web.restoreState(saved) == null) web.loadUrl(HOME);
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    protected void onPause() { super.onPause(); web.onPause(); }

    @Override
    protected void onResume() { super.onResume(); web.onResume(); }

    @SuppressWarnings("deprecation")
    @Override
    public void onBackPressed() {
        if (web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }
}
